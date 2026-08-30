/**
 * Single source of truth for the values that appear in metadata, structured
 * data and the footer. Canonical URLs and og:image have to be absolute, so they
 * cannot be derived from the router at render time.
 */

/** Production origin + base path, no trailing slash. */
export const SITE_URL = "https://alzin.github.io/eat-be-found";

export const SITE_NAME = "膳 Web";

export const SITE_TAGLINE = "飲食店専門 Webリニューアル・MEO運用";

/** TODO: replace with the real inbox before launch. */
export const CONTACT_EMAIL = "hello@example.com";

/**
 * LINE official account.
 *
 * TODO: replace with the real invitation link from LINE Official Account
 * Manager (友だち追加 > 友だち追加URL), which looks like https://lin.ee/xxxxxxx.
 * `LINE_ID` is shown to people who would rather search the ID by hand.
 */
export const LINE_URL = "https://lin.ee/XXXXXXX";
export const LINE_ID = "@zen-web";

/**
 * Phone line.
 *
 * TODO: replace with the real number before launch.
 * `PHONE_DISPLAY` is what people read; `PHONE_HREF` is the E.164 form a dialler
 * needs (drop the leading 0, prefix +81). index.html sets
 * `format-detection: telephone=no` so iOS does not also auto-link the printed
 * number and produce a second, unstyled target.
 */
export const PHONE_DISPLAY = "03-1234-5678";
export const PHONE_HREF = "tel:+81312345678";
export const PHONE_HOURS = "受付時間 10:00〜19:00（土日祝を除く）";

/** Absolute URL for a path such as "/services/meo". */
export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

/** Social preview image. Absolute, and hosted at a stable path. */
export const OG_IMAGE = `${SITE_URL}/og-cover.jpg`;
