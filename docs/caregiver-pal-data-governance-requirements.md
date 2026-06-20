# Caregiver Pal — Data Governance, Privacy & Documentation Requirements

*Companion document to the Caregiver Pal Landing Page PRD (§7 Privacy, Security & Safety) and the Brand Identity & Design System. This document defines how Caregiver Pal documents, governs, and safeguards the sensitive health information it handles.*

> **Not legal advice.** Health-data regulation is jurisdiction-specific and changes frequently. This document provides a defensible, build-ready framework, but a qualified privacy attorney and/or compliance professional must confirm exactly what applies to Caregiver Pal before launch.

---

## 1. Why This Document Exists

Caregiver Pal collects and processes **sensitive health information**: medications and dosages, medication *changes* over time, adverse reactions/side effects, blood and platelet counts, appointments, daily-care notes, and identifying details about a patient. Handling this kind of data well is not just an ethical obligation to users like Denise — it carries specific legal and operational requirements. "Well documented" is the mechanism that makes the whole system **auditable, defensible, and trustworthy**: if you can't show what data you hold, where it flows, who can see it, what the user consented to, and how it's protected, you cannot meet your obligations or your brand promise ("Your loved one's information stays private. Always.").

### 1.1 The Critical Nuance: Your User Enters *Someone Else's* Health Data

In most cases the Caregiver Pal user (the caregiver) is entering health data **about a third party** — the patient (their parent or partner). This is unusual among consumer apps and must be documented and handled deliberately:

- **REQ-SCOPE-01:** Document and define the relationship between the *account holder* (caregiver) and the *data subject* (patient).
- **REQ-SCOPE-02:** Capture and record the caregiver's attestation that they have the authority/consent to manage the patient's information, and document how the patient's own privacy rights (access, deletion) are handled. **[Confirm approach with counsel — this is the highest-risk area.]**

---

## 2. Regulatory Landscape to Assess (with Counsel)

Maintain a written, dated **Regulatory Applicability Determination** that records which of the following apply and why.

| Framework | Likely relevance to Caregiver Pal | Note |
| --- | --- | --- |
| **HIPAA** | *Usually does not apply* to a direct-to-consumer app where the user self-enters data — UNLESS Caregiver Pal acts as a **Business Associate** of a covered entity (e.g., integrates with a provider/EHR, or processes data on a clinic's behalf). | If any provider integration is added, BAAs and full HIPAA obligations are triggered. |
| **FTC Act §5 + Health Breach Notification Rule (HBNR)** | **Very likely applies.** The HBNR (updated, in effect since July 29, 2024) explicitly covers health apps *not* covered by HIPAA, and Section 5 prohibits unfair/deceptive practices — meaning your privacy promises are legally enforceable. | Requires breach notification to individuals and the FTC, generally within 60 days; FTC notified at the same time for breaches of 500+ records. |
| **State consumer-health-data laws** (e.g., Washington **My Health My Data Act**) | **Likely applies** if you serve residents of those states. These laws are "prohibited unless authorized": opt-in consent to collect/process, *separate* consent to share, a signed authorization to sell, a published consumer-health-data privacy policy, and (in WA) a private right of action. | Map which states' residents you serve. |
| **Comprehensive state privacy laws** (CCPA/CPRA, Colorado CPA, Virginia VCDPA, Maryland MODPA, etc.) | **Likely applies** depending on footprint; health data is "sensitive data" requiring extra protection and, in several states, data-protection assessments. | Several require documented risk assessments for sensitive-data processing. |
| **GDPR / UK GDPR** | Applies **if** you serve EU/UK users. Health data is "special category" data requiring a lawful basis, explicit consent, and a DPIA. | Triggers Records of Processing (Art. 30) and DPIA (Art. 35). |

> **Bottom line the sources converge on:** map your health data, publish and maintain accurate privacy notices, obtain and *record* purpose-specific opt-in consent, use a stand-alone authorization before any sale of data, minimize and limit access and retention, contract tightly with every vendor that touches the data, and maintain audit logs and breach processes. Sections 3–9 turn that into concrete, documented requirements.

---

## 3. Required Documentation Artifacts (Core)

Each artifact below is a living document under version control, with a named owner and a review cadence. **Definition of "well documented" = all of these exist, are current, and are auditable.**

| ID | Artifact | Purpose | Suggested Owner | Review Cadence |
| --- | --- | --- | --- | --- |
| DOC-01 | **Data Inventory & Data-Flow Map** (Record of Processing / ROPA) | Every category of data collected (meds, doses, reactions, counts, appointments, identifiers, message content), where it's stored, who/what can access it, and every place it flows (channels, Google Calendar, LLM provider, hosting, analytics) | Privacy Lead | Quarterly + on any change |
| DOC-02 | **Data Dictionary & Classification** | Field-level definitions, formats, and a sensitivity label for each (e.g., "Sensitive Health Data") | Eng + Privacy | On schema change |
| DOC-03 | **Public Privacy Policy** (+ a separate **Consumer Health Data Privacy Policy** where required, e.g., WA MHMDA) | User-facing, plain-language disclosure of what's collected, why, with whom shared, and user rights | Legal | Bi-annual + on change |
| DOC-04 | **Internal Data Protection / Privacy Policy** | Internal rules for handling sensitive data | Privacy Lead | Annual |
| DOC-05 | **Consent & Authorization Records** (see §5) | Versioned proof of what each user consented to and when | Eng + Privacy | Continuous (logged) |
| DOC-06 | **Data Retention & Deletion Schedule** (see §6) | How long each data type is kept and how it's deleted/exported | Privacy + Eng | Annual |
| DOC-07 | **Information Security Policy / Controls Documentation** (see §7) | Encryption, access control, key management, network/security posture | Security | Annual + on change |
| DOC-08 | **Data Protection Impact Assessment (DPIA/PIA)** | Documented risk assessment for high-risk processing of health data (required under GDPR; advisable generally and required for sensitive data under some state laws) | Privacy Lead | On new high-risk feature |
| DOC-09 | **Vendor / Subprocessor Register + Agreements** (DPAs; BAAs if HIPAA applies) | List of every third party touching the data + the contract governing it (LLM provider, hosting, channel providers, calendar, analytics) | Legal + Privacy | Quarterly |
| DOC-10 | **Incident Response & Breach Notification Plan** (see §8) | Who does what within the legal clock if data is exposed | Security + Legal | Annual + drill |
| DOC-11 | **Audit & Access Log Specification** (see §4) | What is logged, where, immutability, retention | Eng + Security | On change |
| DOC-12 | **AI/LLM Data-Handling Statement** (see §4.2) | Exactly what is sent to the model, retention/training settings, redaction | Eng + Privacy | On model/provider change |
| DOC-13 | **Access-Control & Training Records** | Who on the team can access health data, under what role, and their privacy training | Ops/HR + Security | Quarterly |
| DOC-14 | **Change Log / Version History** for DOC-01–13 | Proves documentation is maintained, not stale | Privacy Lead | Continuous |

---

## 4. In-Product Documentation & Audit-Trail Requirements (Engineering)

This is "well documented" at the data layer — and much of it doubles as product value (Denise *needs* the medication history; the system needs it for auditability).

### 4.1 Medication, Reaction & Counts History
- **AUD-01:** Every medication event (add / change dose / discontinue) is stored as an **immutable, timestamped, append-only record** — never silently overwritten. The full history is reconstructable.
- **AUD-02:** Each record captures **source attribution**: who/what entered it (caregiver message, manual entry, parsed from chat) and when.
- **AUD-03:** **Reactions/adverse events** are logged with timestamps and an explicit link to the medication(s) they're associated with (this is both the "thread the reaction to the med" feature and an audit trail).
- **AUD-04:** Blood/platelet **counts** are stored with date, value, and source, with full trend history retained.

### 4.2 Access, Lineage & AI/LLM Documentation
- **AUD-05:** **Access logging** — every read/write of sensitive health fields is logged (actor, action, timestamp, record). Logs are tamper-evident and access-restricted.
- **AI-01:** Maintain a documented **data-lineage record** of exactly what data is sent to the LLM/model provider for each interaction, and why (context minimization).
- **AI-02:** Configure and document the provider's **zero-data-retention / no-training** settings; record that prompts/health content are not used to train external models and are not retained beyond what's necessary. **[Verify per provider contract.]**
- **AI-03:** Document **redaction/minimization** — strip or tokenize identifiers not needed by the model; document what is and isn't transmitted.
- **AI-04:** Document the **prompt/response logging policy** (what's logged internally, retention, who can view) and ensure it inherits the same protections as other health data.

### 4.3 Channel & Integration Documentation
- **CHN-01:** For **each channel** (Telegram, WhatsApp, SMS, email), document its encryption status, the provider's terms/data handling, and what data transits it. **Standard SMS is not end-to-end encrypted** — document this and disclose it to users, recommending a secure channel for sensitive details.
- **INT-01:** For **Google Calendar** (and any future integration), document the exact OAuth scopes requested, what is read vs. written, how tokens are stored/rotated, and how access is revoked.

---

## 5. Consent & Authorization Documentation

- **CON-01:** Capture **opt-in consent** to collect and process health data at onboarding, with the exact consent text versioned and the timestamp/identity recorded (DOC-05).
- **CON-02:** Use a **separate** consent for any *sharing* of health data (e.g., the "Family" tier where siblings see updates) — separate from collection consent.
- **CON-03:** **Never sell health data.** If that ever changed, it would require a distinct, signed authorization — document the prohibition now as policy.
- **CON-04:** Record the **caregiver's authorization attestation** regarding the patient's data (REQ-SCOPE-02).
- **CON-05:** Provide and log an easy **withdrawal of consent** path; honor it and record it.
- **CON-06:** **No dark patterns.** Consent flows must be clear and non-manipulative (also a brand requirement and a legal risk factor under several state laws).

---

## 6. Retention, Deletion & Portability

- **RET-01:** Define and document a retention period for each data type (DOC-06); don't keep data longer than needed.
- **RET-02:** Provide user-initiated **export** ("download everything") and **deletion** ("delete everything") with documented, verifiable completion — including propagation to backups and subprocessors.
- **RET-03:** Document handling of **inactive accounts** and what happens to a patient's data if the caregiver stops using the service or the patient passes away (a real, sensitive scenario for this audience). **[Handle with care + counsel.]**

---

## 7. Security Controls Documentation

- **SEC-01:** **Encryption** in transit (TLS) and at rest, documented to standard. **[Verify implementation.]**
- **SEC-02:** **Role-Based Access Control (RBAC)** with least privilege; documented role definitions (DOC-13).
- **SEC-03:** **Key management** and secrets handling documented.
- **SEC-04:** **No sensitive data in URLs, query strings, logs, analytics, or error reports.**
- **SEC-05:** Documented **authentication** (strong auth/MFA for any internal access to health data).
- **SEC-06:** Periodic **security review/audit** (and, if pursued, third-party attestation such as SOC 2) — display certifications only once actually held.

---

## 8. Incident Response & Breach Notification

- **IR-01:** Maintain a written, rehearsed **Incident Response Plan** (DOC-10) defining detection, containment, assessment, roles, and communications.
- **IR-02:** Document **breach-notification obligations and timelines** consistent with the FTC HBNR (notify affected individuals without undue delay and generally within 60 days; notify the FTC at the same time for breaches of 500+ records) and any applicable state-law timelines. **[Confirm exact obligations with counsel.]**
- **IR-03:** Maintain a **breach register** recording any incident, scope, and the notifications made.

---

## 9. Governance & Keeping It "Living"

- **GOV-01:** Assign a single accountable **owner** for privacy/data protection (a Privacy Lead or DPO). Documentation without an owner goes stale.
- **GOV-02:** Treat documentation **as-code** where possible — keep DOC-01–14 in version control alongside the codebase so changes are reviewed and dated (DOC-14).
- **GOV-03:** Auto-generate what you can (data dictionary from schema, data map from infrastructure) so documentation tracks reality instead of drifting from it.
- **GOV-04:** Run a scheduled review (at minimum the cadences in §3) and before every feature that touches health data.
- **GOV-05:** Publish a user-facing **Trust Center / privacy hub** linked from the landing page (§7 of the PRD) summarizing, in plain language, what you collect, why, how it's protected, and the user's controls — turning good documentation into a trust and conversion asset.

---

## 10. Definition of Done — "Well Documented" Checklist

The sensitive-data handling is considered well documented when:

- [ ] A current **Data Inventory & Data-Flow Map** exists and matches reality (DOC-01).
- [ ] Every sensitive field is **classified** and defined (DOC-02).
- [ ] A **Regulatory Applicability Determination** is on file (§2).
- [ ] **Public + consumer-health privacy policies** are published and accurate (DOC-03).
- [ ] **Consent/authorization** is captured, versioned, and logged, including the caregiver-on-behalf-of-patient case (§5).
- [ ] **Retention/deletion/export** is documented and functional (§6).
- [ ] **Medication/reaction/counts history is immutable and attributable**; access is logged (§4).
- [ ] **LLM data handling** (what's sent, retention/no-training, redaction) is documented (§4.2).
- [ ] **Channel + integration** data handling is documented, including the SMS-encryption caveat (§4.3).
- [ ] **Security controls** are documented (§7).
- [ ] **Incident response + breach plan** exists and has been tested (§8).
- [ ] A **vendor/subprocessor register** with executed agreements exists (DOC-09).
- [ ] Every document has an **owner, a date, and a change history** (§9).

---

## 11. Open Items — Engage Qualified Counsel

1. **Regulatory applicability** — confirm HIPAA (BA scenarios), FTC HBNR, and which state consumer-health laws apply to your footprint.
2. **Caregiver-on-behalf-of-patient authorization** — the legal mechanism and UX for one person managing another's health data.
3. **Consent and privacy-policy language** — opt-in, separate sharing consent, withdrawal, and the consumer-health-data policy where required.
4. **LLM provider terms** — confirm no-training/zero-retention and that the contract covers health data appropriately.
5. **Breach-notification specifics** — exact thresholds, timelines, and recipients across the FTC rule and applicable state laws.
6. **Deceased-patient / account-closure data handling** — sensitive and audience-specific.

---

*This framework operationalizes the Caregiver Pal brand promise of privacy and trust into concrete, maintainable documentation. It should be referenced from §7 of the Landing Page PRD and treated as a release gate: features that touch health data ship only when their documentation does.*
