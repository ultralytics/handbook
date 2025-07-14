---
description: Ultralytics standardized email signatures with automated Google Workspace integration, profile pictures, and legal disclaimers for consistent professional communication.
keywords: Ultralytics email signatures, Google Workspace automation, Gmail signatures, professional email template, legal disclaimers, company branding
---

# Email Signatures 📧

## 1. Official Signature Template

All Ultralytics email signatures are automatically generated and updated using our Google Workspace automation. Here is the standard format:

<img width="1920" alt="Ultralytics Email Signature" src="https://github.com/user-attachments/assets/c8add3bf-a06d-436c-99c8-0e605a9aa612" />

### Example

The standard signature will appear in your email client as shown below.

<table style="border: none; margin: 0; padding: 0; font-family: Arial, sans-serif; font-size: 13px">
  <tr>
    <td style="vertical-align: middle">
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocL27P7pVeDI5jgSam8g64HCBR1C_C1mbkBUZJ0rANJLrAk89fIC=s96-c"
        width="75"
        height="75"
        style="border-radius: 50%; margin-right: 10px; object-fit: cover; display: block"
      />
    </td>
    <td style="vertical-align: middle; line-height: 1.25; color: #666">
      <span style="font-weight: bold; font-size: 15px; color: #333">Glenn Jocher</span><br />
      Founder & CEO, Ultralytics<br />
      +1 123 456 7890<br />
      <a href="https://www.ultralytics.com" style="text-decoration: none; color: #666">ultralytics.com</a>
    </td>
  </tr>
</table>
<div style="font-size: 11px; color: #999; padding-top: 8px">
  This email and any attachments are confidential and intended solely for the addressee. Copying, forwarding, or
  distributing is strictly prohibited. If received in error, please delete immediately and notify the sender.
</div>

### HTML Template

For manual setup in other email clients, use the HTML code below.

```html
<table
    style="border: none; margin: 0; padding: 0; font-family: Arial, sans-serif; font-size: 13px"
>
    <tr>
        <td style="vertical-align: middle">
            <img
                src="https://lh3.googleusercontent.com/a/ACg8ocL27P7pVeDI5jgSam8g64HCBR1C_C1mbkBUZJ0rANJLrAk89fIC=s96-c"
                width="75"
                height="75"
                style="border-radius: 50%; margin-right: 10px; object-fit: cover; display: block"
            />
        </td>
        <td style="vertical-align: middle; line-height: 1.25; color: #666">
            <span style="font-weight: bold; font-size: 15px; color: #333"
                >Glenn Jocher</span
            ><br />
            Founder & CEO, Ultralytics<br />
            +1 123 456 7890<br />
            <a
                href="https://www.ultralytics.com"
                style="text-decoration: none; color: #666"
                >ultralytics.com</a
            >
        </td>
    </tr>
</table>
<div style="font-size: 11px; color: #999; padding-top: 8px">
    This email and any attachments are confidential and intended solely for the
    addressee. Copying, forwarding, or distributing is strictly prohibited. If
    received in error, please delete immediately and notify the sender.
</div>
```

!!! Note

    If you are using this HTML for a custom signature:

    - Replace the placeholder image `src` URL, name, title, and phone number. The phone number line is optional.
    - The legal disclaimer `div` is also optional and can be removed if not required for your position.
    - This HTML has been formatted with `npx prettier --write --print-width 120 *.html`.

## 2. Automation 🤖

The signature automation performs the following actions:

- Pulls the title, phone number, and profile picture from Google Workspace.
- Creates customized signatures for each person.
- Adds legal disclaimers for applicable positions.
- Updates all signatures across the domain.

## 3. Setup Instructions ⚙️

**ACTION REQUIRED:** Please check your Gmail Settings > General > Signature to ensure "My signature" is selected for both:

- FOR NEW EMAILS USE
- ON REPLY/FORWARD USE

<img width="1920" alt="Ultralytics Gmail Settings" src="https://github.com/user-attachments/assets/a4bee95f-793c-4cde-ae7b-526e7ebe0577" />

!!! tip

    If you do not see your signature, please reload the Gmail tab in your browser.

## 4. Legal Disclaimers ⚖️

The legal disclaimer `div` shown in the HTML example is automatically appended to signatures for employees in sensitive roles (e.g., leadership, legal, sales) to ensure confidentiality and compliance. For all other positions, this disclaimer is optional.

!!! quote "Disclaimer text"

    This email and any attachments are confidential and intended solely for the addressee. Copying, forwarding, or distributing is strictly prohibited. If received in error, please delete immediately and notify the sender."

## 5. Technical Implementation 🔧

The automation is implemented in Python and utilizes the following:

- Google Admin SDK for user management.
- Gmail API for signature updates.
- Google Workspace service account for authentication.
- Automatic profile picture optimization with rounded corners.

## 6. Support and Maintenance 🛠️

The email signature automation is maintained by Glenn Jocher. If you have any questions or encounter any issues with your email signature, please contact him for assistance.

---

_Standardized email signatures ensure consistent professional communication across all Ultralytics correspondence. 🚀_
