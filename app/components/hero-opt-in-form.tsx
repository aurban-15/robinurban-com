"use client";

import Script from "next/script";

const DATA_OPTIONS = JSON.stringify({
  settings: {
    after_subscribe: {
      action: "message",
      success_message:
        "You're in! Check your inbox — the Pattern Card is on its way.",
      redirect_url: "",
    },
    analytics: {
      google: null,
      fathom: null,
      facebook: null,
      segment: null,
      pinterest: null,
      sparkloop: null,
      googletagmanager: null,
    },
    modal: {
      trigger: "timer",
      scroll_percentage: null,
      timer: 5,
      devices: "all",
      show_once_every: 15,
    },
    powered_by: {
      show: false,
      url: "https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic",
    },
    recaptcha: { enabled: false },
    return_visitor: { action: "show", custom_content: "" },
    slide_in: {
      display_in: "bottom_right",
      trigger: "timer",
      scroll_percentage: null,
      timer: 5,
      devices: "all",
      show_once_every: 15,
    },
    sticky_bar: {
      display_in: "top",
      trigger: "timer",
      scroll_percentage: null,
      timer: 5,
      devices: "all",
      show_once_every: 15,
    },
  },
  version: "5",
});

export default function HeroOptInForm() {
  return (
    <>
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="afterInteractive"
      />
      <form
        action="https://app.kit.com/forms/9328458/subscriptions"
        className="seva-form formkit-form hero-kit-form"
        method="post"
        data-sv-form="9328458"
        data-uid="8dd3c60131"
        data-format="inline"
        data-version="5"
        data-options={DATA_OPTIONS}
      >
        <div data-style="full">
          <div
            data-element="column"
            className="formkit-background"
            aria-hidden="true"
          />
          <div data-element="column" className="formkit-column">
            <div className="formkit-header" data-element="header">
              <h2>The Pattern That Changes Everything</h2>
            </div>
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            />
            <div
              data-element="fields"
              className="seva-fields formkit-fields"
            >
              <div className="hero-kit-fields">
                <div className="formkit-field hero-kit-input-wrap">
                  <input
                    className="formkit-input hero-kit-input"
                    name="fields[first_name]"
                    aria-label="First Name"
                    placeholder="First name"
                    required
                    type="text"
                  />
                </div>
                <div className="formkit-field hero-kit-input-wrap">
                  <input
                    className="formkit-input hero-kit-input"
                    name="email_address"
                    aria-label="Email Address"
                    placeholder="Email address"
                    required
                    type="email"
                  />
                </div>
                <button
                  data-element="submit"
                  className="formkit-submit hero-kit-submit"
                >
                  <div className="formkit-spinner">
                    <div />
                    <div />
                    <div />
                  </div>
                  <span>Get the Pattern Card</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
