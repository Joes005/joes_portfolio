import React from "react";

/**
 * Pamidor signature [data-hw] kinetic text component.
 * On hover, characters sequentially light up with the crimson-red hw-sweep wave.
 */
export default function HwText({
  text,
  className = "",
  baseColor = "",
  flashColor = "",
  as = "span",
  active = false
}) {
  const words = text.split(" ");
  let globalCharIndex = 0;

  const Tag = as;

  return (
    <Tag
      data-hw="true"
      data-hw-on={active ? "true" : undefined}
      className={`inline-block select-none cursor-pointer group ${className}`}
      style={{
        ...(baseColor ? { "--hw-base": baseColor } : {}),
        ...(flashColor ? { "--wave-flash": flashColor } : {})
      }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, wIdx) => {
          const chars = Array.from(word);
          return (
            <React.Fragment key={wIdx}>
              <span className="inline-block whitespace-nowrap">
                {chars.map((char) => {
                  const hwi = globalCharIndex++;
                  return (
                    <span
                      key={hwi}
                      data-hw-char="true"
                      className="inline-block"
                      style={{ "--hwi": hwi }}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
              {wIdx < words.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </React.Fragment>
          );
        })}
      </span>
    </Tag>
  );
}
