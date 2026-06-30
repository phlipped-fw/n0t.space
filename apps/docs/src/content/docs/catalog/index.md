---
title: Threat Catalog
description: Index of catalogued physical electronic attacks.
---

The Threat Catalog is the canonical taxonomy of physical electronic attacks PHLIPPED covers. Each entry has the form `PHL-T-NNN`. Source of truth: [`phlipped-catalog`](https://github.com/phlipped-fw/phlipped-catalog).

## v0.2 entries

| ID | Name | Category | Severity | Skill |
|---|---|---|---|---|
| PHL-T-001 | HID Prox 125 kHz cloning | rfid-nfc | 7.5 | 1 |
| PHL-T-002 | HID injection via BadUSB | hid-injection | 8.0 | 2 |
| PHL-T-003 | MIFARE Classic key recovery and cloning | rfid-nfc | 8.0 | 2 |
| PHL-T-004 | Sub-GHz fixed-code replay (garage doors, gates) | sub-ghz | 6.5 | 1 |
| PHL-T-005 | Drop device on corporate LAN (Responder/mitm6/ntlmrelayx) | drop-device | 9.2 | 3 |
| PHL-T-006 | O.MG Cable (malicious USB cable with HID + WiFi C2) | hid-injection | 8.5 | 3 |
| PHL-T-007 | Evil twin rogue AP with captive portal credential harvest | rogue-ap | 7.5 | 2 |
| PHL-T-008 | USB mass-storage exfiltration from kiosks | usb-exfil | 7.0 | 1 |
| PHL-T-009 | WPA handshake capture and offline cracking | rogue-ap | 6.0 | 2 |
| PHL-T-010 | Vehicle key fob relay attack | sub-ghz | 7.0 | 3 |

Roadmap: 40+ entries by month 3 (proposal §8 Phase 1). Click any ID to read the full entry on GitHub.
