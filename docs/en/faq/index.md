---
description: Frequently Asked Questions about working at Ultralytics, covering finance, equipment, workflows, policies, and support resources.
keywords: Ultralytics FAQ, employee questions, company policies, expense reimbursement, hardware policy, YOLO development, onsite work, office locations
---

# Frequently Asked Questions 💬

!!! tip "Quick Navigation"

    Jump to: [Getting Started](#getting-started) · [Finance](#finance-expenses) · [Hardware](#hardware-equipment) · [Development](#development-contributions) · [Time Off](#time-off-policies) · [Policies](#policies-procedures) · [Culture](#company-culture-goals) · [YOLO Technical](#technical-yolo-questions)

## Getting Started 🚀

??? question "Where do I find the most important information as a new hire?"

    Start with these key resources:

    <div class="grid cards" markdown>

    -   :material-rocket-launch: **[Onboarding Guide](../people/onboarding.md)**

        ---

        Your complete first 90 days roadmap

    -   :material-book-open-variant: **[Introduction](../introduction.md)**

        ---

        Overview of the handbook

    -   :material-target: **[Mission & Values](../mission-vision-values/index.md)**

        ---

        What drives us

    -   :material-laptop: **[Hardware Policy](../tools/hardware.md)**

        ---

        Equipment setup

    -   :material-code-braces: **[Development Workflow](../workflows/development.md)**

        ---

        Getting started with code

    </div>

??? question "Are all positions onsite?"

    Most positions are **onsite** (5 days/week) at our London, Madrid, or Shenzhen offices.

    :material-dog: **All our offices are dog-friendly!**

    This enables the collaboration and rapid execution that drive our success. Some team members work remotely under existing arrangements or in exceptional cases.

??? question "Who do I contact for different types of questions?"

    | Question Type | Contact |
    |--------------|---------|
    | **IT/Technical** | `#it-support` on Slack |
    | **Finance/Expenses** | `#finance` on Slack |
    | **Legal/Compliance** | [legal@ultralytics.com](mailto:legal@ultralytics.com) or `#compliance` |
    | **Security** | [security@ultralytics.com](mailto:security@ultralytics.com) |
    | **HR/Policies** | Your manager or HR team |
    | **General Questions** | Your direct manager |

## Finance & Expenses 💰

??? question "How do I submit expenses for reimbursement?"

    === "Under $3,000"

        1. Pay personally and keep receipts
        2. Submit via company platform with business justification
        3. Reimbursement processed within **7 business days**

    === "$3,000+"

        1. Submit request with cost estimate for **pre-approval**
        2. Receive approval before purchasing
        3. Submit receipts after purchase

    See [Finance Handbook](../finance/index.md) for complete details.

??? question "What's the typical reimbursement timeline?"

    Reimbursements are processed within **7 business days** after submission and approval.

    !!! tip "Pro Tip"
        Submit expenses within the same fiscal quarter for faster processing.

??? question "What does per diem cover when traveling?"

    === "Included in Per Diem"
        - [x] All meals (breakfast, lunch, dinner)
        - [x] Ground transportation (taxis, rideshares, public transit)
        - [x] Incidental expenses (tips, laundry, parking)

    === "Reimbursed Separately"
        - :material-airplane: Airfare (economy class only)

    See [Travel Policy](../finance/travel.md) for per diem rates by city.

??? question "Does Ultralytics provide company credit cards?"

    **No**, Ultralytics does not issue corporate credit cards.

    Use personal payment methods for approved business expenses and submit for reimbursement following standard procedures.

??? question "What's the referral bonus program?"

    **$5,000 bonus** for referring a qualified candidate who:

    - Gets hired
    - Completes 3 months of employment

    See [Referral Bonus Policy](../finance/referral-bonus.md) for eligibility and requirements.

## Hardware & Equipment 🖥️

??? question "What equipment do new hires receive?"

    <div class="grid cards" markdown>

    -   :material-laptop: **Laptop**

        ---

        - **MacBook Air** (13", M4, 16GB RAM, 256GB)
        - **MacBook Pro** (14", M4, 16GB RAM, 512GB) for technical roles

    -   :material-headphones: **Audio**

        ---

        **AirPods Pro**

    -   :material-monitor: **Display**

        ---

        **Apple Studio Display** (onsite employees at office desk)

    </div>

??? question "How is equipment delivered?"

    === "Onsite Employees"
        Equipment ready at your office on **day one**.

    === "Remote Employees"
        1. Order independently
        2. Submit receipts for reimbursement
        3. Follow [Finance procedures](../finance/index.md#reimbursements)

??? question "When can I upgrade my equipment?"

    **Hardware refresh cycle: Every 2 years**

    ```mermaid
    graph LR
        A[Get Manager Approval] --> B[Order New Device]
        B --> C[Use Apple Trade-In]
        C --> D[Submit for Reimbursement]

        style A fill:#e1f5ff
        style D fill:#d4edda
    ```

    Reimbursed amount = **net cost** (new device - trade-in credit)

    See [Hardware Policy](../tools/hardware.md) for complete details.

??? question "Is Rippling MDM required?"

    !!! warning "Mandatory Requirement"

        **Yes**, Rippling MDM is **mandatory** on all devices used for work before accessing company data.

    Install from: [app.rippling.com/enroll-device](https://app.rippling.com/enroll-device)

??? question "What if my equipment breaks or gets lost?"

    Contact **IT Support immediately**:

    - **Email**: [helpdesk@ultralytics.com](mailto:helpdesk@ultralytics.com)
    - **Slack**: `#it-support` channel

    Report:

    - [ ] Physical damage to equipment
    - [ ] Lost or stolen devices
    - [ ] Hardware malfunctions
    - [ ] Security incidents

??? question "Can I use my personal device for work?"

    Personal devices (BYOD) require:

    1. ✅ Explicit approval from manager and IT
    2. ✅ **Mandatory Rippling MDM installation**
    3. ✅ Compliance with all security policies

    !!! info "Recommendation"
        Company-provided hardware is the standard approach.

## Development & Contributions 💻

??? question "How do I start contributing to the codebase?"

    ```mermaid
    graph TD
        A[Fork Repository] --> B[Install Package]
        B --> C[Create Feature Branch]
        C --> D[Follow Coding Standards]
        D --> E[Submit PR]
        E --> F[Sign CLA]
        F --> G[Address Feedback]
        G --> H[Merge!]

        style A fill:#e1f5ff
        style H fill:#d4edda
    ```

    See [How to Contribute](../contributions/how-to-contribute.md) for complete guide.

??? question "What are the coding standards?"

    | Standard | Requirement |
    |----------|-------------|
    | **Line Width** | 120 characters maximum |
    | **Docstrings** | Google-style with types |
    | **Imports** | Use `pathlib` over `os` |
    | **Functions** | Keep short and focused |
    | **Testing** | All PRs must pass CI tests |

    See [Development Workflow](../workflows/development.md) for complete standards.

??? question "What's the PR review process?"

    1. Submit PR with clear description
    2. CI tests run automatically
    3. Team reviews within **1-2 business days**
    4. Address feedback with additional commits
    5. Once approved, changes merge to main

    See [Development Workflow](../workflows/development.md) for details.

??? question "Where can I find the development team contacts?"

    See [Development Team Directory](../contributions/how-to-contribute.md#our-development-team) for the complete team list with GitHub profiles.

## Time Off & Policies 📅

??? question "How much PTO do I get?"

    **25 days** of annual PTO (24 days + 1 birthday), plus:

    - :material-calendar: All official public holidays in your country
    - :material-medical-bag: Unlimited sick leave as needed

    | Benefit | Details |
    |---------|---------|
    | **Allocation** | Full from day one |
    | **Rollover** | Up to 15 days (40 day max balance) |
    | **Tenure Bonus** | +1 day every 2 years (up to 30 days total) |

    See [PTO Policy](../people/pto-policy.md).

??? question "How do I request time off?"

    1. Submit request in [Rippling](https://www.rippling.com/)
    2. Wait for manager approval
    3. Update team calendar and Slack status

    !!! warning "Notice Requirements"
        - **Vacation**: 2 weeks minimum
        - **Short breaks**: 1 week minimum
        - **Contractors**: 30-day waiting period

??? question "What's the relocation policy?"

    Eligible employees relocating to hub cities receive:

    | Benefit | Amount | Requirements |
    |---------|--------|--------------|
    | **Payment** | $6,000 flat one-time | Business-critical move |
    | **Cities** | Madrid, London, Shenzhen | Pre-approval required |
    | **Commitment** | 18 months tenure | Mandatory |

    See [Relocation Policy](../finance/relocation.md) for eligibility.

## Policies & Procedures 📋

??? question "What software can I use?"

    Only approved software listed in the [Software Policy](../tools/software.md).

    **Request new software:**

    1. Check [Approved Vendor Database](https://www.notion.so/218fe6fef1c3804d9479f0d3dd78ca62?v=218fe6fef1c3819b804e000c8232e2c2)
    2. Get manager approval
    3. Submit via [Vendor Onboarding Form](https://www.notion.so/218fe6fef1c38093a6cef5c63000dfaf?pvs=106)
    4. Security and Legal review
    5. Install after final approval

??? question "How are email signatures managed?"

    Email signatures are **automated** via Google Workspace:

    - ✅ Pulls info from your Google Workspace profile
    - ✅ Updates automatically across the organization
    - ✅ No manual configuration needed

    Ensure "My signature" is enabled in Gmail Settings. See [Email Signatures](../tools/email-signatures.md).

??? question "What training is required?"

    All employees complete annual mandatory training:

    === "General (All Employees)"
        - **CCPA** (California Consumer Privacy Act)
        - **GDPR** (General Data Protection Regulation)
        - **General Security Awareness**

    === "Engineering Teams"
        - **Secure Code Training** (YOLO and Platform teams only)

    Training delivered via [Vanta](https://app.vanta.com/c/ultralytics/employee/onboarding).

??? question "Where do I report security incidents?"

    !!! danger "Report Immediately"

        - **Email**: [security@ultralytics.com](mailto:security@ultralytics.com)
        - **Slack**: `#compliance` channel (tag `@compliance-team`)

    See [Security Requirements](../security/employee-security-compliance-requirements.md).

## Company Culture & Goals 🎯

??? question "What are Ultralytics' core values?"

    <div class="grid cards" markdown>

    -   :material-rocket-launch: **Relentless Progress**

        ---

        Constantly evolving and improving

    -   :material-star: **Strive for Excellence**

        ---

        Perseverance in achieving quality

    -   :material-check-bold: **Actions, Not Words**

        ---

        Defined by what we do

    -   :material-clock-fast: **Act with Urgency**

        ---

        Move swiftly to capture opportunities

    -   :material-earth: **Open Access to All**

        ---

        Transparent communication for everyone

    </div>

    See [Mission & Values](../mission-vision-values/index.md).

??? question "What are the company goals?"

    **2025 strategic priorities:**

    | Focus Area | Goals |
    |-----------|-------|
    | **Product Excellence** | YOLO11 leadership, best-in-class performance |
    | **Community Growth** | 1M+ monthly downloads, 50K+ Discord members |
    | **Business Development** | Scale commercial licensing, expand customer base |
    | **Technical Infrastructure** | Launch Platform v2.0, achieve 99.9% uptime |
    | **Security & Compliance** | Complete SOC 2 and ISO 27001 certifications |

    See [Company Goals](../goals/company-goals.md) for complete KPIs.

??? question "How does Ultralytics use OKRs?"

    We use quarterly OKRs (Objectives and Key Results) for goal setting:

    - Company-level OKRs cascade to team and individual goals
    - Quarterly planning and review cycles
    - Target 70-80% achievement (not 100%)
    - Transparent and visible across organization

    See [OKRs](../goals/okrs.md) for framework details.

## Technical YOLO Questions 🤖

??? question "Where do I find technical documentation for YOLO models?"

    For technical questions about YOLO models, training, inference, and deployment:

    <div class="grid cards" markdown>

    -   :material-book: **[YOLO Documentation](https://docs.ultralytics.com/)**

        ---

        Complete technical guides

    -   :material-help-circle: **[YOLO FAQ](https://docs.ultralytics.com/help/FAQ/)**

        ---

        Common technical questions

    -   :material-school: **[Training Guide](https://docs.ultralytics.com/modes/train/)**

        ---

        Model training

    -   :material-rocket-launch: **[Deployment Options](https://docs.ultralytics.com/guides/model-deployment-options/)**

        ---

        Export and inference

    -   :material-forum: **[GitHub Discussions](https://github.com/orgs/ultralytics/discussions)**

        ---

        Community support

    -   :material-code-braces: **[Contributing Guide](https://docs.ultralytics.com/help/contributing/)**

        ---

        Open-source contribution

    </div>

## Still Have Questions? 🤔

!!! question "Can't find what you're looking for?"

    1. **Browse the handbook**: Use search or navigation to find specific topics
    2. **Ask your manager**: First point of contact for most questions
    3. **Contact specialized teams**: IT, Finance, Legal, Security
    4. **Check documentation**: [YOLO Docs](https://docs.ultralytics.com/) for technical questions

---

_This FAQ is continuously updated. Have a question that should be added? Contact your manager or submit a handbook improvement PR!_
