// src/components/action/base-button/component.tsx
import { twMerge as twMerge2 } from "tailwind-merge";
import Link from "next/link";

// src/components/utilities/typography/component.tsx
import { twMerge } from "tailwind-merge";
import { jsx } from "react/jsx-runtime";
var Typography = ({
  align = "left",
  children,
  color = "primary",
  variant = "body1",
  weight,
  className
}) => {
  const variantTagMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body1: "p",
    body2: "p",
    label: "span"
  };
  const colorClassMap = {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
    disabled: "text-text-disabled",
    success: "text-text-success",
    error: "text-text-error",
    warning: "text-text-warning",
    contrast: "text-text-contrast",
    inherit: "text-inherit"
  };
  const alignClassMap = {
    center: "text-center",
    left: "text-left",
    right: "text-right"
  };
  const weightClassMap = {
    thin: "font-thin",
    extraLight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semiBold: "font-semibold",
    bold: "font-bold",
    extraBold: "font-extrabold",
    black: "font-black"
  };
  const Component = variantTagMap[variant] || "p";
  const classes = twMerge(
    colorClassMap[color],
    // Classe de cor
    alignClassMap[align],
    // Classe de alinhamento
    variant,
    // Classe da variante
    weight ? weightClassMap[weight] : "",
    // Classe de peso
    "w-full",
    className
    // Classes adicionais
  );
  return /* @__PURE__ */ jsx(Component, { className: classes, children });
};
var component_default = Typography;

// src/components/action/base-button/component.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var BaseButton = ({
  variant = "contained",
  // Default value for variant
  label,
  startIcon,
  endIcon,
  rounded = "full",
  // Default value for rounded
  href,
  ...props
}) => {
  const variantClasses = {
    contained: "bg-primary-main text-primary-contrast border-primary-main",
    outlined: "bg-transparent text-primary-main border-2 border-primary-main",
    text: "bg-transparent text-primary-main border-transparent hover:bg-primary-light"
  };
  const roundedClasses = {
    full: "rounded-full",
    slightly: "rounded-xl",
    semi: "rounded-2xl"
  };
  const classes = twMerge2(
    "flex flex-row align-center justify-center w-fit gap-x-2 px-5 py-3 hover:opacity-75 transition-opacity duration-200 ease-in-out",
    // Base class
    variantClasses[variant],
    roundedClasses[rounded]
  );
  const renderButtonContent = () => /* @__PURE__ */ jsxs("div", { className: classes, children: [
    startIcon && /* @__PURE__ */ jsx2("span", { className: "icon-left", children: startIcon }),
    label && /* @__PURE__ */ jsx2(component_default, { variant: "label", color: "inherit", children: label }),
    endIcon && /* @__PURE__ */ jsx2("span", { className: "icon-right", children: endIcon })
  ] });
  if (href) {
    return /* @__PURE__ */ jsx2(Link, { href, children: renderButtonContent() });
  }
  return /* @__PURE__ */ jsx2("button", { ...props, children: renderButtonContent() });
};
var component_default2 = BaseButton;

// src/components/display/accordion/component.tsx
import { useState as useState2 } from "react";

// src/components/display/accordion/accordionItem.tsx
import { useRef, useEffect, useState } from "react";
import { twMerge as twMerge3 } from "tailwind-merge";
import { Plus, Minus } from "react-feather";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var AccordionItem = ({ id, title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(isOpen ? "auto" : "0px");
  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen]);
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col w-full bg-secondary-light rounded-xl", children: [
    /* @__PURE__ */ jsx3("div", { id: `accordion-heading-${id}`, className: "flex w-full", children: /* @__PURE__ */ jsxs2(
      "button",
      {
        type: "button",
        className: twMerge3(
          "flex items-center justify-between w-full p-4 gap-x-2",
          "transition-colors duration-300"
        ),
        onClick: () => onToggle(id),
        "aria-expanded": isOpen,
        "aria-controls": `accordion-body-${id}`,
        children: [
          /* @__PURE__ */ jsx3(component_default, { variant: "h6", color: "primary", weight: "medium", children: title }),
          /* @__PURE__ */ jsx3("div", { className: "flex-shrink-0", children: isOpen ? /* @__PURE__ */ jsx3(Minus, { className: "w-5 h-5 transition-transform duration-300" }) : /* @__PURE__ */ jsx3(Plus, { className: "w-5 h-5 transition-transform duration-300" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx3(
      "div",
      {
        id: `accordion-body-${id}`,
        ref: contentRef,
        className: "overflow-hidden transition-all duration-300 ease-in-out",
        style: { height },
        "aria-labelledby": `accordion-heading-${id}`,
        children: /* @__PURE__ */ jsx3("div", { className: "p-4 pt-0", children: /* @__PURE__ */ jsx3(component_default, { variant: "body2", color: "secondary", children: content }) })
      }
    )
  ] });
};
var accordionItem_default = AccordionItem;

// src/components/display/accordion/component.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Accordion = ({ items }) => {
  const [openItemId, setOpenItemId] = useState2(null);
  const toggleItem = (id) => {
    setOpenItemId((prevId) => prevId === id ? null : id);
  };
  return /* @__PURE__ */ jsx4("div", { className: "flex flex-col w-full gap-y-2 md:max-w-[436px] xl:max-w-[564px]", children: items.map(({ id, title, content }) => /* @__PURE__ */ jsx4(
    accordionItem_default,
    {
      id,
      title,
      content,
      isOpen: openItemId === id,
      onToggle: toggleItem
    },
    id
  )) });
};

// src/components/display/comment-block/component.tsx
import { PiQuotesFill } from "react-icons/pi";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var CommentBlock = ({ text, color }) => {
  const isContrast = color === "contrast";
  const iconColorClass = {
    contrast: "text-primary-contrast",
    main: "text-primary-main",
    light: "text-primary-light",
    dark: "text-primary-dark"
  }[color];
  return /* @__PURE__ */ jsxs3("div", { className: "flex flex-col w-full md:max-w-[464px] gap-y-1", children: [
    /* @__PURE__ */ jsx5(PiQuotesFill, { className: `w-8 h-8 text-4xl transform rotate-180 ${iconColorClass}` }),
    /* @__PURE__ */ jsx5(component_default, { variant: "body1", color: isContrast ? "contrast" : "primary", children: text })
  ] });
};
var component_default3 = CommentBlock;

// src/components/display/section-title/component.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var SectionTitle = ({ title, text, align = "center", variant = "hero" }) => {
  const variantTagMap = {
    hero: "h1",
    main: "h2",
    highlight: "h3",
    subHighlight: "h4"
  };
  return /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-y-1 w-full max-w-[292px] md:max-w-[438px] xl:max-w-[564px]", children: [
    /* @__PURE__ */ jsx6(component_default, { variant: variantTagMap[variant], align, className: "max-w-[272px] md:max-w-full", children: title }),
    /* @__PURE__ */ jsx6(component_default, { variant: "body2", color: "secondary", weight: "semiBold", align, children: text })
  ] });
};

// src/components/utilities/container/component.tsx
import { twMerge as twMerge4 } from "tailwind-merge";
import { jsx as jsx7 } from "react/jsx-runtime";
var Container = ({ children, className, bgColor = "default", bgCustomColor }) => {
  const bgColorMap = {
    default: "bg-background-default",
    paper: "bg-background-paper",
    brand: "bg-background-brand"
  };
  return /* @__PURE__ */ jsx7("div", { className: twMerge4("w-full", bgColorMap[bgColor], bgCustomColor), children: /* @__PURE__ */ jsx7(
    "div",
    {
      className: twMerge4(
        "w-full bg-transparent mx-auto px-4 py-8 md:max-w-[960px] md:px-16 md:py-8 lg:max-w-[1152px]",
        className
      ),
      children
    }
  ) });
};
var component_default4 = Container;

// src/components/display/simple-hero-banner/component.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var SimpleHeroBanner = ({ title }) => {
  return /* @__PURE__ */ jsx8(component_default4, { bgColor: "brand", className: "py-16 md:py-24", children: /* @__PURE__ */ jsx8(component_default, { variant: "h2", align: "center", color: "contrast", children: title }) });
};
var component_default5 = SimpleHeroBanner;

// src/components/display/tab-view/component.tsx
import { useState as useState3 } from "react";

// src/components/display/tab-view/tabButton.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var TabButton = ({ id, label, isActive, onClick }) => {
  return /* @__PURE__ */ jsx9(
    "button",
    {
      className: `px-3 py-2 rounded-2xl transition-all duration-300 ${isActive ? "bg-primary-main" : "bg-transparent hover:bg-neutral-light"}`,
      onClick: () => onClick(id),
      children: /* @__PURE__ */ jsx9(component_default, { variant: "label", color: isActive ? "contrast" : "secondary", weight: "medium", children: label })
    }
  );
};
var tabButton_default = TabButton;

// src/components/display/tab-view/component.tsx
import { twMerge as twMerge5 } from "tailwind-merge";
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var TabView = ({ tabs, initialTab, className }) => {
  const [activeTab, setActiveTab] = useState3(initialTab ?? tabs[0]?.id ?? "");
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
  return /* @__PURE__ */ jsxs5("div", { className: twMerge5("flex flex-col gap-16 items-center", className), children: [
    /* @__PURE__ */ jsx10("div", { className: "flex gap-2 w-fit bg-background-default p-2 rounded-3xl", children: tabs.map(({ id, label }) => /* @__PURE__ */ jsx10(tabButton_default, { id, label, isActive: activeTab === id, onClick: setActiveTab }, id)) }),
    /* @__PURE__ */ jsx10("div", { className: "flex w-[700px] h-[400px] rounded-2xl justify-center p-4 bg-background-default", children: activeTabContent ? /* @__PURE__ */ jsx10("div", { className: "flex flex-col", children: activeTabContent }) : /* @__PURE__ */ jsx10("div", { className: "flex flex-col", children: "Nenhum conte\xFAdo dispon\xEDvel." }) })
  ] });
};
var component_default6 = TabView;

// src/components/display/text-block/component.tsx
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var TextBlock = ({ title, text, align = "left" }) => {
  return /* @__PURE__ */ jsxs6("div", { className: "flex flex-col gap-y-1 w-full md:max-w-[438px] xl:max-w-[468px]", children: [
    /* @__PURE__ */ jsx11(component_default, { variant: "h5", align, children: title }),
    /* @__PURE__ */ jsx11(component_default, { variant: "body1", color: "secondary", align, children: text })
  ] });
};
export {
  Accordion,
  component_default2 as BaseButton,
  component_default3 as CommentBlock,
  component_default4 as Container,
  SectionTitle,
  component_default5 as SimpleHeroBanner,
  component_default6 as TabView,
  TextBlock,
  component_default as Typography
};
