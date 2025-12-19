"use client";

import { Affix, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUpCircle, IconArrowsUp } from "@tabler/icons-react";
import { ArrowUpCircle, ChevronUp } from "lucide-react";
import React from "react";

export const ScrollTopAffix: React.FC = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 40, right: 0 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <button
            className="w-12 h-12 bg-primary-900 rounded-l-lg shadow-lg flex items-center justify-center transition-colors duration-300 hover:bg-primary-900 group"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            aria-label="Scroll to top"
          >
            <ChevronUp
              className="w-6 h-6 text-white transition-colors duration-300"
            />
          </button>
        )}
      </Transition>
    </Affix>
  );
};
