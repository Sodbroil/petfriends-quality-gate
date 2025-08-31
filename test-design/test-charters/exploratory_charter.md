# 🕵️ Exploratory Testing Charter - PetFriends

## 📋 Charter Information
- **Application:** PetFriends 2.0
- **Testing Focus:** User Registration Flow
- **Time Box:** 60 minutes
- **Tester:** sodbroil
- **Date:** 2024-01-15

## 🎯 Mission
Explore the user registration process to identify usability issues, edge cases, and potential improvements in the user experience.

## 📝 Test Ideas & Areas to Explore
### 🔍 Registration Form
- Try different email formats
- Test password complexity requirements
- Attempt registration with existing email
- Test form validation messages
- Try special characters in all fields

### 🔍 User Experience
- Tab order and keyboard navigation
- Error message clarity and helpfulness
- Success confirmation experience
- Loading states and feedback
- Mobile form experience

### 🔍 Edge Cases
- Very long values in text fields
- SQL injection attempts in form fields
- XSS attempts in input fields
- Rapid form submissions
- Browser back button during registration

## 🛠 Tools & Data
- **Browser:** Chrome DevTools
- **Test Data:** Generated emails with patterns
- **Network:** Throttle to 3G for performance testing
- **Devices:** Test on mobile and desktop

## 📋 Notes & Observations
### ✅ Positive Findings
- Registration form has clean UI
- Password strength indicator helpful
- Success message clear and informative

### ⚠️ Issues Found
- No email format validation message
- Password requirements not visible until error
- No resend confirmation email option

### 🐞 Bugs Logged
- [BUG-REG-01] - Special characters in name cause 500 error
- [BUG-REG-02] - No maxlength validation on email field

## 📊 Session Metrics
- **Time Spent:** 55 minutes
- **Bugs Found:** 2
- **Usability Issues:** 3
- **Test Cases Created:** 5 new ideas

## 🎯 Conclusion
Registration flow generally works well but needs better validation and user guidance. Two functional bugs identified requiring immediate attention.

---

**Next Steps:** 
- Create formal test cases for found issues
- Retest after bug fixes
- Explore login flow in next session
