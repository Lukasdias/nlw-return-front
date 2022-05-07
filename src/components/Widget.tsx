import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 md:bottom-8 right-4 md:right-8 flex flex-col items-end">
      <Popover.Panel className="mb-4">
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="overflow-hidden bg-rocket-brand rounded-full px-3 h-12 text-white flex items-center group hover:bg-rocket-brand-hover transition-colors duration-400">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 font-bold group-hover:max-w-xs transition-all text-white duration-500 ease-linear">
          <span className="ml-3" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
