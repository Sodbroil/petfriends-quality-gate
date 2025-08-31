# 🧪 Test Cases - Authentication Module

## 📋 Module Information
- **Module:** Authentication
- **Priority:** High
- **Test Type:** Functional
- **Requirement ID:** US-001, US-002

## 🔐 Registration Test Cases

### TC-AUTH-001: Successful Registration
**Description:** Verify user can register with valid credentials  
**Preconditions:** User is on registration page  
**Test Steps:**
1. Enter valid email address
2. Enter valid password (meeting complexity requirements)
3. Confirm password
4. Click "Register" button
**Expected Result:** Registration successful, user redirected to login page with success message  
**Priority:** High  
**Status:** ✅ Passed

### TC-AUTH-002: Registration with Existing Email
**Description:** Verify system prevents duplicate email registration  
**Preconditions:** User with test@email.com already exists  
**Test Steps:**
1. Enter existing email: test@email.com
2. Enter valid password
3. Confirm password
4. Click "Register" button
**Expected Result:** Error message displayed "Email already exists"  
**Priority:** High  
**Status:** ✅ Passed

### TC-AUTH-003: Password Complexity Validation
**Description:** Verify system validates password complexity  
**Preconditions:** User on registration page  
**Test Steps:**
1. Enter valid email
2. Enter weak password: "123"
3. Click "Register" button
**Expected Result:** Error message about password requirements  
**Priority:** Medium  
**Status:** ✅ Passed

## 🔐 Login Test Cases

### TC-AUTH-004: Successful Login
**Description:** Verify user can login with valid credentials  
**Preconditions:** User account exists and is active  
**Test Steps:**
1. Enter valid email
2. Enter valid password
3. Click "Login" button
**Expected Result:** Login successful, redirected to dashboard  
**Priority:** High  
**Status:** ✅ Passed

### TC-AUTH-005: Login with Invalid Password
**Description:** Verify system rejects invalid password  
**Preconditions:** User account exists  
**Test Steps:**
1. Enter valid email
2. Enter invalid password
3. Click "Login" button
**Expected Result:** Error message "Invalid credentials"  
**Priority:** High  
**Status:** ✅ Passed

### TC-AUTH-006: Login with Non-Existent Email
**Description:** Verify system rejects non-existent email  
**Preconditions:** No user with nonexistent@email.com exists  
**Test Steps:**
1. Enter nonexistent@email.com
2. Enter any password
3. Click "Login" button
**Expected Result:** Error message "Invalid credentials"  
**Priority:** Medium  
**Status:** ✅ Passed

## 🔐 Session Management Test Cases

### TC-AUTH-007: Session Persistence
**Description:** Verify login session persists after refresh  
**Preconditions:** User is logged in  
**Test Steps:**
1. Refresh browser page
2. Verify still logged in
3. Check user data loaded correctly
**Expected Result:** Session maintained, user remains logged in  
**Priority:** High  
**Status:** ✅ Passed

### TC-AUTH-008: Successful Logout
**Description:** Verify user can logout successfully  
**Preconditions:** User is logged in  
**Test Steps:**
1. Click "Logout" button
2. Confirm logout if prompted
**Expected Result:** Redirected to login page, session terminated  
**Priority:** High  
**Status:** ✅ Passed

### TC-AUTH-009: Session Timeout
**Description:** Verify session expires after inactivity  
**Preconditions:** User logged in, timeout set to 30 minutes  
**Test Steps:**
1. Wait 31 minutes without activity
2. Attempt to access protected page
**Expected Result:** Redirected to login page with timeout message  
**Priority:** Medium  
**Status:** ⏳ Not Executed

## 🎯 Test Results Summary
- **Total Test Cases:** 9
- **Passed:** 8 (89%)
- **Failed:** 0
- **Blocked:** 0
- **Not Executed:** 1
- **Overall Status:** ✅ PASS
