import React from "react";

/**
 * Pamidor signature OPEN THE DOOR mechanical animation.
 * The word "DOOR" physically stretches and expands like an opening gateway.
 */
export default function AnimatedDoor({ className = "" }) {
  return (
    <span
      data-door="true"
      className={`inline-flex items-baseline font-funnel font-black select-none ${className}`}
    >
      <span>OPEN THE D</span>
      <span className="door-give inline-block origin-left">
        <span className="door-o inline-block">O</span>
        <span aria-hidden="true" className="door-add"></span>
      </span>
      <span className="door-r inline-block">R</span>
    </span>
  );
}
