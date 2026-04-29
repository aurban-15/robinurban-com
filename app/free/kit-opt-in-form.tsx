"use client";

import Script from "next/script";

// Kit form configuration (from the form's Publish → Embed code).
// Re-paste the embed's data-options string if anything about the form's
// post-subscribe behavior, analytics, or modal settings changes in Kit.
const DATA_OPTIONS = JSON.stringify({
  settings: {
    after_subscribe: {
      action: "message",
      success_message:
        "You're in! Check your inbox -- the Pattern Card is on its way.",
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
      show: true,
      url: "https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic",
    },
    recaptcha: { enabled: false },
    // "show" keeps the form rendering even for people who've previously subscribed
    // in this browser. Kit's embed default is "hide" — change back once in production
    // if you'd rather not re-pitch the card to existing subscribers.
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

export default function KitOptInForm() {
  return (
    <>
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="afterInteractive"
      />
      <form
        action="https://app.kit.com/forms/9328458/subscriptions"
        className="seva-form formkit-form"
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
              className="seva-fields formkit-fields space-y-4"
            >
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  name="fields[first_name]"
                  aria-label="First Name"
                  placeholder="First Name"
                  required
                  type="text"
                />
              </div>
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Email Address"
                  required
                  type="email"
                />
              </div>
              <button
                data-element="submit"
                className="formkit-submit formkit-submit"
              >
                <div className="formkit-spinner">
                  <div />
                  <div />
                  <div />
                </div>
                <span>Send me the Pattern Card &rarr;</span>
              </button>
            </div>
            <div
              className="formkit-disclaimer"
              data-element="disclaimer"
            >
              No spam, ever. Unsubscribe anytime.
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
