# ⚠️ HIGH-001: Pet Deletion Sometimes Removes Wrong Pet

## 📋 Basic Information
| Attribute | Value |
| :--- | :--- |
| **ID** | `HIGH-001` |
| **Title** | Pet deletion function occasionally removes incorrect pet from list |
| **Status** | `Open` |
| **Severity** | `High` |
| **Priority** | `P1` |
| **Environment** | `Staging` |
| **Browser** | `Chrome 115` |
| **OS** | `Windows 11` |
| **Reproducibility** | `Sometimes` (≈30% of attempts) |
| **Build Version** | `v2.0.1-build-487` |

## 📝 Description
When deleting pets from a list with multiple pets, the system occasionally removes the wrong pet. This appears to be related to ID mismatches or race conditions in the deletion process.

## 🧪 Steps to Reproduce
1. Login to application
2. Add at least 3 pets to your account
3. Refresh page to ensure proper loading
4. Attempt to delete the second pet in the list
5. Observe which pet actually gets deleted
6. **Actual Result:** Sometimes first or third pet gets deleted instead

## 🎯 Expected Result
The specifically selected pet should be deleted from the list.

## 🐞 Actual Result
Random pet gets deleted from the list, not necessarily the selected one.

## 📸 Evidence
- **Screen Recording:** `pet_deletion_bug.mp4` showing inconsistent behavior
- **Console Logs:** API calls show correct ID but wrong deletion occurs

## 🔧 Additional Information
- **Related Requirements:** US-005 (Delete Pet)
- **Regression:** `Yes` - introduced in v2.0.0
- **Workaround:** Delete pets one by one with page refresh between each
- **Root Cause:** Likely client-side ID mapping issue

## 👥 Assignments
- **Assigned To:** Frontend Team
- **Reported By:** [Your Name]
- **Reported Date:** 2024-01-15
- **Due Date:** 2024-01-18

---

**Tags:** `high`, `pet-management`, `deletion`, `data-loss`
