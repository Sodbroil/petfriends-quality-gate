# 🛠 Test Environment Setup Guide

## 1. Overview
This document provides comprehensive instructions for setting up the optimal test environment for PetFriends application testing.

## 2. Environment URLs
| Environment | URL | Purpose | Credentials |
| :--- | :--- | :--- | :--- |
| Production | `https://petfriends.skillfactory.ru/` | Live production site | N/A |
| Staging | `https://staging.petfriends.skillfactory.ru/` | Pre-production testing | `testuser / Test123!` |
| Development | `https://dev.petfriends.skillfactory.ru/` | Feature testing | `devuser / Dev123!` |
| Local | `http://localhost:3000/` | Local development | N/A |

## 3. Browser Requirements
### Supported Browsers
- **Chrome:** Version 115 or newer
- **Firefox:** Version 115 or newer  
- **Safari:** Version 16 or newer
- **Edge:** Version 115 or newer

## 4. Test Data Setup
### Pre-existing Test Accounts
| Role | Email | Password | Purpose |
| :--- | :--- | :--- | :--- |
| Admin | `admin@test.com` | `Admin123!` | Administrator testing |
| Regular User | `user@test.com` | `User123!` | General functionality |
| Empty Account | `empty@test.com` | `Empty123!` | New user scenarios |

### Test Data Generation
Use the following pattern for new test accounts:
- **Email:** `testuser+{timestamp}@gmail.com`
- **Password:** `Test123!`
- **Pet Names:** `TestPet_{random_number}`

## 5. Mobile Testing Setup
### Physical Devices
- iPhone 12 (iOS 16)
- Samsung Galaxy S21 (Android 13)
- iPad Air (iPadOS 16)

### Emulators/Simulators
- Android Studio - For Android emulation
- Xcode - For iOS simulation  
- BrowserStack - For cloud-based testing

### Mobile Browser Testing
- Chrome Mobile
- Safari iOS
- Samsung Internet

## 6. API Testing Setup
### Postman Installation
1. Download Postman: https://www.postman.com/downloads/
2. Import collection from: `4-automation/postman-collection/`
3. Set environment variables:
   - `baseUrl`: `https://petfriends.skillfactory.ru`
   - `authToken`: `{{login and capture token}}`

### API Credentials
- **Email:** `api@test.com`
- **Password:** `Api123!`
- **API Key:** `special_api_key_2024`

## 7. Network Configuration
### Proxy Settings
- Charles Proxy - For API monitoring
- Fiddler - For request inspection
- Browser DevTools - Network tab analysis

### Network Throttling
Test with different network conditions:
- **4G:** 20ms latency, 10Mbps download
- **3G:** 100ms latency, 2Mbps download  
- **2G:** 300ms latency, 0.5Mbps download
- **Offline:** No network connection

## 8. Test Tools Setup
### Required Tools
- Postman - API testing
- Chrome DevTools - Browser debugging
- JSON Formatter - API response formatting
- Screen Ruler - Pixel measurement
- Color Picker - Color validation

### Browser Extensions
- JSON Formatter
- React Developer Tools
- Lighthouse
- Accessibility Checker

## 9. Troubleshooting
### Common Issues
- **CORS errors** - Use browser extensions to disable CORS
- **SSL certificate issues** - Add exception for test environments
- **Login failures** - Clear cookies and local storage
- **API timeouts** - Check network connectivity

## 10. Maintenance
- Update browsers monthly
- Refresh test data weekly
- Validate environment URLs monthly
- Review and update this document quarterly

---

*Last Updated: 2024-01-15*  
*Document Version: 2.1*
