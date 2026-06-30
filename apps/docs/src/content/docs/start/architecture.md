---
title: Architecture
description: The five components of PHLIPPED.
---

PHLIPPED has five inter-dependent components.

1. **Threat Catalog** — hierarchical taxonomy of physical electronic attacks. Each entry: unique ID, prerequisites (physical access, time, hardware, skill 1–5), MITRE ATT&CK mapping, observable indicators, known tools, severity baseline.
2. **Assessment Methodology** — auditable checklist producing the Physical Security Posture Score (PSPS) 0–100.
3. **Detection Layer** — Wazuh + Sigma rules per threat (HID injection typing-rate, rogue AP duplicate SSID, drop-device MAC OUI on non-IT VLAN, etc.).
4. **Hardening Playbook** — prevent / detect / respond per threat, each mapped to approximate € cost and effort in hours.
5. **Reference implementation & validation** — `phlipped-assess` CLI, `phlipped-lab` docker-compose, validation report comparing baseline vs hardened environments.
