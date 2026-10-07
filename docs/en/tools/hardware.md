---
description: Ultralytics Hardware Policy covering MacBook configurations, Apple Studio Display, mobile devices, MDM security, refresh cycles, and approval processes.
keywords: Ultralytics hardware policy, MacBook Air, MacBook Pro, hardware refresh, mobile devices, BYOD, Rippling MDM, employee equipment
---

# Hardware Policy 💻

![Ultralytics Hardware Policy](https://github.com/user-attachments/assets/6a1566ab-7984-46a0-96b2-0f9dc944bfde)

## Purpose and Scope

This policy outlines the provisioning, management, and security of all hardware used by Ultralytics employees. Its purpose is to ensure everyone has the necessary tools to perform their roles effectively while protecting the company's assets and data. This policy applies to all full-time, part-time, and contract employees.

## Hardware Refresh Cycle 🔄

!!! success "2-Year Refresh Cycle"

    **All employees are eligible for a hardware refresh every two years.**

    This ensures our team is equipped with modern and efficient tools.

```mermaid
flowchart TD
    subgraph y1["Year 1"]
        A([New device issued]) --> B[Peak performance]
    end
    subgraph y2["Year 2"]
        C[Continued use] --> D[Refresh eligible]
    end
    subgraph refresh["Refresh"]
        E[Automatic approval] --> F[Order with trade-in]
        F --> G([Receive new device])
    end
    y1 --> y2
    y2 --> refresh
```

!!! warning "Outside Standard Cycle"

    Replacement requests outside the 2-year cycle require **direct manager approval** based on performance needs or hardware failure.

## Standard Computer Equipment 🖥️

<div class="grid cards" markdown>

- :material-laptop: **MacBook Air**

    ***

    [13", M5, 16GB RAM, 512GB Storage](https://www.apple.com/macbook-air/)

    **Default for all employees**

    Balances performance and portability

- :material-laptop: **MacBook Pro**

    ***

    [14", M5, 16GB RAM, 512GB Storage](https://www.apple.com/macbook-pro/)

    **For technical/developer roles**

    Additional processing power

</div>

**Note:** The MacBook Pro is heavier than the MacBook Air and may be less suitable for employees who travel frequently.

!!! warning "Keyboard Language"

    **Ensure you order the correct keyboard layout** for your language when requesting equipment.

### Custom Configurations

!!! danger "Requires Manager Approval"

    Any hardware configuration other than the two standards listed above is considered an **exception** and requires:

    - Direct manager approval
    - Clear business justification
    - Written approval before ordering

## New Hire Equipment Process 📦

!!! info "Standard Process - High-Resolution Hybrid"

    Ultralytics runs on **Anchor Days (Tue/Wed/Thu)** for anyone within commutable distance of our London, Madrid, Shenzhen, or New York offices. Plan to badge in and collaborate in person on those days; Mondays/Fridays flex around focused execution.

**Your manager will coordinate with IT to have equipment ready at your office on your first day.** Equipment includes your computer, all accessories, and a fully set up workspace ready when you arrive - just plug in and start working!

??? note "Exception: Remote Employees"

    For the rare approved-remote positions (outside commutable distance):

    1. Order your approved equipment configuration independently
    2. Submit receipts to Finance for reimbursement
    3. Follow standard [reimbursement procedures](../finance/index.md#reimbursements)
    4. Confirm purchase details with manager **before ordering**
    5. Expect to travel for critical in-person sprints as needed

### Standard Accessories

<div class="grid cards" markdown>

- :material-headphones: **AirPods Pro**

    ***

    [Apple AirPods Pro](https://www.apple.com/airpods-pro/)

    For all employees

- :material-monitor: **Studio Display**

    ***

    [Apple Studio Display](https://www.apple.com/studio-display/)

    **Onsite employees only** at office desk

</div>

## Hardware Replacements & Upgrades 🔧

This process applies when replacing an existing device with a new one (not for new hires).

```mermaid
flowchart TD
    A([Need a replacement]) --> B{Within 2-year cycle?}
    B -->|yes| D[Select eligible device]
    B -->|no| C{Manager approves?}
    C -->|yes| D
    C -->|no| E([Keep old device])
    D --> F[Order with trade-in]
    F --> G["Receive device, migrate data"]
    G --> H[Ship old device to Apple]
    H --> I[Submit for reimbursement]
    I --> J([Net cost reimbursed])
```

### Replacement Process

Begin by requesting replacement approval from your manager, which is automatically granted if you're within the 2-year refresh cycle but requires business justification if outside the standard timeline. Once approved, select your eligible device (MacBook Air or MacBook Pro) based on your role requirements and portability needs. Order the new device directly from Apple, ensuring you select the trade-in option during checkout and provide the serial number of your existing device.

Upon receiving your new device, migrate all data from your old device and test functionality thoroughly before returning the old one. Ship your old device back to Apple using the provided trade-in kit and follow the [Apple Trade In](https://www.apple.com/shop/trade-in) instructions. Finally, submit your purchase for reimbursement through Finance procedures. The reimbursed amount will be the net cost (new device price minus trade-in credit), not the full price of the new device.

!!! warning "Approval and Reimbursement Requirements"

    Your manager and Finance team must see the **full order details** including:

    - New device price
    - Estimated trade-in credit for old device
    - Net cost to be reimbursed

## Mobile Device Policy 📱

!!! info "Not Standard Issue"

    Company-provided mobile devices require **manager approval** and clear business justification.

### Eligibility and Justification

<div class="grid cards" markdown>

- :material-airplane-takeoff: **Frequent Travel**

    ***

    Constant access to work apps and email required

- :material-phone-alert: **On-Call Duties**

    ***

    Immediate response capabilities necessary

- :material-cellphone-check: **Platform Testing**

    ***

    Need to test on specific mobile platforms

</div>

### Approval Process

```mermaid
flowchart TD
    A([Need a mobile device]) --> B[Write a justification]
    B --> C[Submit to manager]
    C --> D{Approved?}
    D -->|no| E([Use personal device])
    D -->|yes| F[Purchase device]
    F --> G[Submit receipt to Finance]
    G --> H([Receive reimbursement])
```

## Device Management & Security 🔒

### Rippling MDM: Mandatory Requirement

!!! danger "Critical Security Requirement"

    **All devices used for work MUST have Rippling MDM installed**

    This applies to:

    - MacBook Air/Pro
    - Windows 11 devices (Windows 11 Pro required)
    - iPads
    - iPhones
    - Android devices
    - Personal devices (BYOD)

**Installation Required:**

- Install from the device enrollment page in your Rippling account
- Must be installed **before** accessing any company data
- Failure to install blocks access to company resources

### Security & Compliance Policies

All devices must adhere to these security requirements enforced via Rippling MDM:

<div class="grid cards" markdown>

- :material-lock: **Encryption**

    ***

    Full disk encryption (FileVault) enabled

- :material-key: **Strong Passwords**

    ***

    Device protected with complex password

- :material-update: **Auto Updates**

    ***

    Security updates enabled automatically

- :material-shield-check: **Compliance**

    ***

    Regular compliance checks performed

- :material-remote: **Remote Management**

    ***

    IT can remotely lock or wipe if needed

</div>

!!! warning "Strict Compliance Enforcement"

    Devices without properly configured Rippling MDM:

    - ❌ Not permitted for work use
    - ❌ Blocked from accessing company resources
    - ❌ Cannot access email, Slack, or internal tools

## Bring Your Own Device (BYOD) Policy 🤝

!!! info "Limited Approval"

    While company-provided hardware is the standard, personal devices may be used in **limited, pre-approved circumstances**.

### Requirements for BYOD

| Requirement                 | Details                                          |
| --------------------------- | ------------------------------------------------ |
| **Approval**                | Explicit approval from manager AND IT department |
| **MDM Installation**        | **Mandatory** Rippling MDM enrollment            |
| **Security Compliance**     | Must meet all security policies                  |
| **Employee Responsibility** | You maintain and care for your device            |

!!! tip "Recommendation"

    **Company-provided hardware is strongly recommended** over BYOD for:

    - Better security and compliance
    - Standardized support experience
    - No personal device risk
    - Clear separation of work/personal

## Care, Maintenance, and Support 🛠️

### Employee Responsibility

<div class="grid cards" markdown>

- :material-hand-heart: **Professional Use**

    ***

    Use equipment professionally and responsibly

- :material-shield-star: **Physical Protection**

    ***

    Keep devices physically protected and clean

- :material-close-circle: **No DIY Repairs**

    ***

    Don't attempt unauthorized repairs

- :material-update: **Install Updates**

    ***

    Install security updates promptly

</div>

### Reporting Damage or Loss

!!! danger "Report Immediately to IT Support"

    **Slack:** `#help-it` channel

    Report any of the following immediately:

    - [ ] Physical damage to equipment
    - [ ] Lost or stolen device
    - [ ] Hardware malfunction
    - [ ] Suspected security incidents or viruses

## Hardware Ownership and Return 📋

### Ownership

!!! info "Company Property"

    All hardware purchased or reimbursed by Ultralytics is **company property**.

### Return Process Upon Departure

**Coordinate with your manager and IT department to return all equipment on your last day:**

- In-person handoff at office (standard)
- IT provides pre-paid shipping labels if needed
- All equipment must be returned within 3 business days

!!! warning "Equipment Return Checklist"

    Before returning equipment:

    - [ ] Back up personal files (nothing personal should be stored)
    - [ ] Sign out of all accounts
    - [ ] Remove personal data
    - [ ] Factory reset not required (IT will handle)
    - [ ] Include all accessories (chargers, cables, etc.)

## Reimbursement Process 💰

All hardware purchases must follow standard company reimbursement procedures:

```mermaid
flowchart TD
    A([Purchase approved hardware]) --> B[Keep all receipts]
    B --> C[Submit with justification]
    C --> D[Finance reviews]
    D --> E{Approved?}
    E -->|yes| F([Month-end payment])
    E -->|no| G[Provide more info]
    G -.-> C
```

!!! tip "Reimbursement Tips"

    - Submit all receipts to Finance team
    - Include clear description of business purpose
    - For detailed procedures, see [Finance Handbook](../finance/index.md)
    - Approved expenses submitted by the monthly cutoff are paid together in the next reimbursement batch
