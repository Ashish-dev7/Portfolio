import { useCallback, useEffect, useRef, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const MAX_WEEKS = 53;

export default function GitHubGraph({ username = 'Ashish-dev7' }) {
  const wrapRef = useRef(null);
  const [width, setWidth] = useState(0);

  // Measure the available width and re-measure on resize
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    setWidth(el.clientWidth);
    const ro = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Scale squares and text with the available width
  const blockSize = width < 420 ? 10 : width < 700 ? 11 : 12;
  const blockMargin = 4;
  const fontSize = width < 420 ? 12 : 14;

  // How many week-columns fit (minus 1 for the partial first week)
  const columnWidth = blockSize + blockMargin;
  const weeks = Math.max(
    8,
    Math.min(MAX_WEEKS, Math.floor((width + blockMargin) / columnWidth) - 1)
  );

  const transformData = useCallback(
    (data) => {
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - weeks * 7);
      return data.filter((d) => new Date(d.date) >= cutoff);
    },
    [weeks]
  );

  const period =
    weeks >= 52 ? 'year' : `${Math.max(1, Math.round(weeks / 4.345))} months`;

  return (
    <div className="mt-14 w-full">
      {/* Heading */}
      <div className="flex items-center gap-4 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold whitespace-nowrap">
          GitHub Activity
        </h3>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      {/* Measured container: full width, graph centered inside it */}
      <div ref={wrapRef} className="w-full overflow-x-auto">
        <div className="flex justify-center min-w-max mx-auto w-full">
          {width > 0 && (
            <GitHubCalendar
              username={username}
              colorScheme="dark"
              blockSize={blockSize}
              blockMargin={blockMargin}
              fontSize={fontSize}
              transformData={transformData}
              labels={{
                totalCount: `{{count}} contributions in the last ${period}`,
              }}
              theme={{
                dark: ['#0b1220', '#064e3b', '#047857', '#10b981', '#22c55e'],
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}