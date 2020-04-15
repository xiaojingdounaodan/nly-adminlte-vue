import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { navbarVariantOpitons, textSizeOptions } from "../../utils/nly-config";

const name = "NlyWrapperHeader";

export const NlyWrapperHeader = Vue.extend({
  name: name,
  props: {
    expand: {
      type: String
    },
    variant: {
      type: String,
      default: "white"
    },
    dark: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
    border: {
      type: Boolean,
      default: true
    },
    navbarClass: {
      type: String
    },
    tag: {
      type: String,
      default: "header"
    },
    nav: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customTag() {
      return this.tag;
    },
    customNav() {
      return this.nav ? "navbar" : "";
    },
    customNavbarExpand: function() {
      return this.expand == "xl"
        ? "navbar-expand-xl"
        : this.expand == "lg"
        ? "navbar-expand-lg"
        : this.expand == "md"
        ? "navbar-expand-md"
        : this.expand == "sm"
        ? "navbar-expand-sm"
        : this.expand == "no"
        ? "navbar-no-expand"
        : "navbar-expand";
    },
    customnNvbarVariant: function() {
      return nlyGetOptionsByKeyEqual(navbarVariantOpitons, this.variant);
    },
    customNavbarFontSize: function() {
      return nlyGetOptionsByKeyEqual(textSizeOptions, this.size);
    },
    customNavbarBorder: function() {
      return this.border ? "" : "border-bottom-0";
    },
    customNavbarClass: function() {
      return this.navbarClass;
    },
    customNavbarDark() {
      return this.dark ? "navbar-dark" : "navbar-light";
    }
  },
  render(h) {
    return h(
      this.customTag,
      {
        staticClass: "main-header",
        class: [
          this.customNavbarExpand,
          this.customNavbarDark,
          this.customnNvbarVariant,
          this.customNavbarFontSize,
          this.customNavbarBorder,
          this.customNavbarClass
        ]
      },
      this.$slots.default
    );
  }
});
