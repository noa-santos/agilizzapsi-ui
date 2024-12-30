"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  BaseButton: () => component_default2,
  CommentBlock: () => component_default3,
  Container: () => component_default4,
  SectionTitle: () => SectionTitle,
  SimpleHeroBanner: () => component_default5,
  TabView: () => component_default6,
  TextBlock: () => TextBlock,
  Typography: () => component_default
});
module.exports = __toCommonJS(index_exports);

// src/components/action/base-button/component.tsx
var import_tailwind_merge2 = require("tailwind-merge");
var import_link = __toESM(require("next/link"));

// src/components/utilities/typography/component.tsx
var import_tailwind_merge = require("tailwind-merge");
var import_jsx_runtime = require("react/jsx-runtime");
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
  const classes = (0, import_tailwind_merge.twMerge)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { className: classes, children });
};
var component_default = Typography;

// src/components/action/base-button/component.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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
    contained: "bg-primary-main text-primary-contrast border-2 border-primary-main",
    outlined: "bg-transparent text-primary-main border-2 border-primary-main",
    text: "bg-transparent text-primary-main border-transparent hover:bg-primary-light"
  };
  const roundedClasses = {
    full: "rounded-full",
    slightly: "rounded-xl",
    semi: "rounded-2xl"
  };
  const classes = (0, import_tailwind_merge2.twMerge)(
    "flex flex-row align-center justify-center w-fit gap-x-2 px-5 py-2 hover:opacity-75 transition-opacity duration-200 ease-in-out",
    variantClasses[variant],
    roundedClasses[rounded]
  );
  const renderButtonContent = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: classes, children: [
    startIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "icon-left", children: startIcon }),
    label && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(component_default, { variant: "label", color: "inherit", children: label }),
    endIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "icon-right", children: endIcon })
  ] });
  if (href) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link.default, { href, children: renderButtonContent() });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { ...props, children: renderButtonContent() });
};
var component_default2 = BaseButton;

// src/components/display/accordion/component.tsx
var import_react2 = require("react");

// src/components/display/accordion/accordionItem.tsx
var import_react = require("react");
var import_tailwind_merge3 = require("tailwind-merge");
var import_react_feather = require("react-feather");
var import_jsx_runtime3 = require("react/jsx-runtime");
var AccordionItem = ({ id, title, content, isOpen, onToggle }) => {
  const contentRef = (0, import_react.useRef)(null);
  const [height, setHeight] = (0, import_react.useState)(isOpen ? "auto" : "0px");
  (0, import_react.useEffect)(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col w-full bg-secondary-light rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: `accordion-heading-${id}`, className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "button",
      {
        type: "button",
        className: (0, import_tailwind_merge3.twMerge)(
          "flex items-center justify-between w-full p-4 gap-x-2",
          "transition-colors duration-300"
        ),
        onClick: () => onToggle(id),
        "aria-expanded": isOpen,
        "aria-controls": `accordion-body-${id}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(component_default, { variant: "h6", color: "primary", weight: "medium", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex-shrink-0", children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_feather.Minus, { className: "w-5 h-5 transition-transform duration-300" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_feather.Plus, { className: "w-5 h-5 transition-transform duration-300" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        id: `accordion-body-${id}`,
        ref: contentRef,
        className: "overflow-hidden transition-all duration-300 ease-in-out",
        style: { height },
        "aria-labelledby": `accordion-heading-${id}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "p-4 pt-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(component_default, { variant: "body2", color: "secondary", children: content }) })
      }
    )
  ] });
};
var accordionItem_default = AccordionItem;

// src/components/display/accordion/component.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Accordion = ({ items }) => {
  const [openItemId, setOpenItemId] = (0, import_react2.useState)(null);
  const toggleItem = (id) => {
    setOpenItemId((prevId) => prevId === id ? null : id);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex flex-col w-full gap-y-2 md:max-w-[436px] xl:max-w-[564px]", children: items.map(({ id, title, content }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_pi = require("react-icons/pi");
var import_jsx_runtime5 = require("react/jsx-runtime");
var CommentBlock = ({ text, color }) => {
  const isContrast = color === "contrast";
  const iconColorClass = {
    contrast: "text-primary-contrast",
    main: "text-primary-main",
    light: "text-primary-light",
    dark: "text-primary-dark"
  }[color];
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-col w-full md:max-w-[464px] gap-y-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_pi.PiQuotesFill, { className: `w-8 h-8 text-4xl transform rotate-180 ${iconColorClass}` }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(component_default, { variant: "body1", color: isContrast ? "contrast" : "primary", children: text })
  ] });
};
var component_default3 = CommentBlock;

// src/components/display/section-title/component.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var SectionTitle = ({ title, text, align = "center", variant = "hero" }) => {
  const variantTagMap = {
    hero: "h1",
    main: "h2",
    highlight: "h3",
    subHighlight: "h4"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex flex-col gap-y-1 w-full max-w-[292px] md:max-w-[438px] xl:max-w-[564px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(component_default, { variant: variantTagMap[variant], align, className: "max-w-[272px] md:max-w-full", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(component_default, { variant: "body2", color: "secondary", weight: "semiBold", align, children: text })
  ] });
};

// src/components/utilities/container/component.tsx
var import_tailwind_merge4 = require("tailwind-merge");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Container = ({ children, className, bgColor = "default", bgCustomColor }) => {
  const bgColorMap = {
    default: "bg-background-default",
    paper: "bg-background-paper",
    brand: "bg-background-brand"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: (0, import_tailwind_merge4.twMerge)("w-full", bgColorMap[bgColor], bgCustomColor), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: (0, import_tailwind_merge4.twMerge)("w-full bg-transparent mx-auto px-4 max-w-[1080px]", className), children }) });
};
var component_default4 = Container;

// src/components/display/simple-hero-banner/component.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var SimpleHeroBanner = ({ title }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(component_default4, { bgColor: "brand", className: "py-16 md:py-24", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(component_default, { variant: "h2", align: "center", color: "contrast", children: title }) });
};
var component_default5 = SimpleHeroBanner;

// src/components/display/tab-view/component.tsx
var import_react3 = require("react");

// src/components/display/tab-view/tabButton.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var TabButton = ({ id, label, isActive, onClick }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "button",
    {
      className: `px-3 py-2 rounded-2xl transition-all duration-300 ${isActive ? "bg-primary-main" : "bg-transparent hover:bg-neutral-light"}`,
      onClick: () => onClick(id),
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(component_default, { variant: "label", color: isActive ? "contrast" : "secondary", weight: "medium", children: label })
    }
  );
};
var tabButton_default = TabButton;

// src/components/display/tab-view/component.tsx
var import_tailwind_merge5 = require("tailwind-merge");
var import_jsx_runtime10 = require("react/jsx-runtime");
var TabView = ({ tabs, initialTab, className }) => {
  const [activeTab, setActiveTab] = (0, import_react3.useState)(initialTab ?? tabs[0]?.id ?? "");
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: (0, import_tailwind_merge5.twMerge)("flex flex-col gap-16 items-center", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex gap-2 w-fit bg-background-default p-2 rounded-3xl", children: tabs.map(({ id, label }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(tabButton_default, { id, label, isActive: activeTab === id, onClick: setActiveTab }, id)) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex w-[700px] h-[400px] rounded-2xl justify-center p-4 bg-background-default", children: activeTabContent ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex flex-col", children: activeTabContent }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex flex-col", children: "Nenhum conte\xFAdo dispon\xEDvel." }) })
  ] });
};
var component_default6 = TabView;

// src/components/display/text-block/component.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var TextBlock = ({ title, text, align = "left" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex flex-col gap-y-1 w-full md:max-w-[438px] xl:max-w-[468px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(component_default, { variant: "h5", align, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(component_default, { variant: "body1", color: "secondary", align, children: text })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  BaseButton,
  CommentBlock,
  Container,
  SectionTitle,
  SimpleHeroBanner,
  TabView,
  TextBlock,
  Typography
});
