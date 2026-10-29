/**
 * Standalone Front-End UI for Financial Help Portal (/financeHelp/general?tab=deposit)
 * Pure HTML/CSS/JS implementation (local state only, no external network calls).
 */

const I18N = {
  vi_VN: {
    "financeHelp.title": "Hỗ trợ nhanh",
    "financeHelp.tabs.deposit": "Nạp tiền",
    "financeHelp.tabs.withdrawal": "Rút tiền",
    "financeHelp.tabs.account": "Tài khoản",
    "financeHelp.questionTitle": "Chưa nhận được tiền nạp?",
    "financeHelp.questionDesc":
      "Gửi số đơn nạp tiền và tải lên biên lai chuyển khoản ngân hàng để xác minh.",
    "financeHelp.depositOrderNumber": "Số đơn nạp tiền",
    "financeHelp.accountHolderName": "Tên chủ tài khoản",
    "financeHelp.actualTransferAmount": "Số tiền chuyển thực tế",
    "financeHelp.transactionIdLabel": "Mã giao dịch",
    "financeHelp.bankTransferReceipt": "Biên lai chuyển khoản ngân hàng",
    "financeHelp.fileSizeHint": "Kích thước tệp không được vượt quá 10MB",
    "financeHelp.submit": "Gửi",
    "financeHelp.chargeOrderIdDigitsOnly": "Chỉ nhập số",
    "financeHelp.chargeOrderIdMaxLength": "Tối đa 20 ký tự",
    "financeHelp.cardholderNameNoSpecialChars": "Không được phép dùng ký tự đặc biệt",
    "financeHelp.realNameMaxLength": "Tối đa 100 ký tự",
    "financeHelp.actualAmountMustBePositive": "Số tiền phải là số dương",
    "financeHelp.actualAmountMaxDecimals": "Tối đa 2 chữ số thập phân",
    "financeHelp.transactionIdNoSpecialChars": "Không được phép dùng ký tự đặc biệt",
    "financeHelp.transactionIdMaxLength": "Tối đa 40 ký tự",
    "financeHelp.uploadOnlyTypesSupported":
      "Chỉ hỗ trợ tệp jpg, jpeg, png, gif, webp",
    "financeHelp.uploadFileSizeExceed": "Kích thước tệp không được vượt quá 10MB",
    "financeHelp.placeholder.depositOrderNumber": "Vui lòng nhập số đơn nạp tiền",
    "financeHelp.placeholder.accountHolderName": "Vui lòng nhập tên chủ tài khoản",
    "financeHelp.placeholder.actualTransferAmount": "Vui lòng nhập số tiền chuyển",
    "financeHelp.placeholder.transactionId": "Vui lòng nhập mã giao dịch",
    "financeHelp.placeholder.bankTransferReceipt":
      "Vui lòng tải lên biên lai chuyển khoản ngân hàng",
    "financeHelp.placeholder.withdrawalOrderNumber": "Vui lòng nhập số đơn rút tiền",
    "financeHelp.withdrawalOrderNumber": "Số đơn rút tiền",
    "financeHelp.withdrawalQuestionTitle": "Chưa nhận được tiền rút?",
    "financeHelp.withdrawalQuestionDesc":
      "Gửi số đơn rút tiền và tải lên biên lai chuyển khoản ngân hàng để xác minh.",
    "financeHelp.account.selectUpdateTitle": "Chọn thông tin cần cập nhật",
    "financeHelp.account.modifyTypes.loginPwd": "Mật khẩu đăng nhập",
    "financeHelp.account.modifyTypes.fundPwd": "Mật khẩu rút tiền",
    "financeHelp.account.emailReviewHint":
      "Kết quả xét duyệt và mật khẩu mới sẽ được gửi đến địa chỉ email bên dưới.",
    "financeHelp.account.emailVerification": "Xác minh email",
    "financeHelp.account.sendCode": "Gửi mã",
    "financeHelp.account.resend": "Gửi lại",
    "financeHelp.account.codeWillBeSentHint":
      "Mã xác minh sẽ được gửi đến email của bạn.",
    "financeHelp.account.checkSpamHint":
      "Nếu không nhận được email, vui lòng kiểm tra hộp thư rác.",
    "financeHelp.account.invalidEmail": "Vui lòng nhập địa chỉ email hợp lệ",
    "financeHelp.account.verifyEmailFirst": "Vui lòng nhập mã xác minh gồm 6 chữ số",
    "financeHelp.account.fields.username": "Tên người dùng",
    "financeHelp.account.fields.realName": "Họ và tên thật",
    "financeHelp.account.fields.eWallet": "Ví điện tử",
    "financeHelp.account.fields.idFrontPhoto": "Ảnh mặt trước CMND/CCCD",
    "financeHelp.account.fields.lastPayVoucher":
      "Biên lai nạp tiền thành công gần nhất",
    "financeHelp.account.placeholder.email": "Vui lòng nhập email",
    "financeHelp.account.placeholder.verificationCode": "Vui lòng nhập mã xác minh",
    "financeHelp.account.placeholder.username": "Vui lòng nhập tên người dùng",
    "financeHelp.account.placeholder.realName": "Vui lòng nhập họ và tên thật",
    "financeHelp.account.placeholder.eWallet": "Vui lòng nhập ví điện tử",
    "financeHelp.account.placeholder.idFrontPhoto":
      "Vui lòng tải lên ảnh mặt trước CMND/CCCD",
    "financeHelp.account.placeholder.lastPayVoucher":
      "Vui lòng tải lên biên lai nạp tiền thành công gần nhất",
    "financeHelp.account.eWalletStart0Len11":
      "Vui lòng nhập 10-11 chữ số hợp lệ",
    "successPage.title": "Gửi thành công",
    "successPage.description":
      "Hệ thống đang xác minh thông tin nạp tiền của bạn. Nếu nạp tiền thành công, số tiền sẽ được cộng vào tài khoản trò chơi của bạn trong vòng 10 phút. Nếu sau 10 phút vẫn chưa nhận được, vui lòng liên hệ lại bộ phận chăm sóc khách hàng. Cảm ơn bạn đã kiên nhẫn.",
    "successPage.accountDescription":
      "Yêu cầu của bạn đã được gửi thành công. Kết quả sẽ được gửi đến email của bạn. Nếu không nhận được email, vui lòng kiểm tra hộp thư rác.",
    "successPage.back": "Quay lại",
    "withdrawalResult.title": "Đang xử lý khẩn cấp",
    "withdrawalResult.content":
      "Vấn đề của bạn đã được chuyển đến bộ phận liên quan để xử lý gấp. Nếu sau 30 phút vẫn chưa có cập nhật, vui lòng liên hệ lại bộ phận chăm sóc khách hàng. Cảm ơn bạn đã kiên nhẫn.",
  },
  bn_BD: {
    "financeHelp.title": "দ্রুত সাহায্য",
    "financeHelp.tabs.deposit": "ডিপোজিট",
    "financeHelp.tabs.withdrawal": "উইথড্রয়াল",
    "financeHelp.tabs.account": "অ্যাকাউন্ট",
    "financeHelp.questionTitle": "ডিপোজিট পাননি?",
    "financeHelp.questionDesc":
      "ডিপোজিট অর্ডার নম্বর জমা দিন এবং যাচাইয়ের জন্য ব্যাংক ট্রান্সফার রিসিপ্ট আপলোড করুন।",
    "financeHelp.depositOrderNumber": "ডিপোজিট অর্ডার নম্বর",
    "financeHelp.accountHolderName": "অ্যাকাউন্ট ধারকের নাম",
    "financeHelp.actualTransferAmount": "প্রকৃত ট্রান্সফার পরিমাণ",
    "financeHelp.transactionIdLabel": "লেনদেন আইডি",
    "financeHelp.bankTransferReceipt": "ব্যাংক ট্রান্সফার রিসিপ্ট",
    "financeHelp.fileSizeHint": "ফাইলের আকার ১০MB এর বেশি হতে পারবে না",
    "financeHelp.submit": "জমা দিন",
    "financeHelp.chargeOrderIdDigitsOnly": "শুধুমাত্র সংখ্যা",
    "financeHelp.chargeOrderIdMaxLength": "সর্বোচ্চ ২০ অক্ষর",
    "financeHelp.cardholderNameNoSpecialChars": "বিশেষ অক্ষর অনুমোদিত নয়",
    "financeHelp.realNameMaxLength": "সর্বোচ্চ ১০০ অক্ষর",
    "financeHelp.actualAmountMustBePositive": "পরিমাণ একটি ধনাত্মক সংখ্যা হতে হবে",
    "financeHelp.actualAmountMaxDecimals": "সর্বোচ্চ ২ দশমিক স্থান",
    "financeHelp.transactionIdNoSpecialChars": "বিশেষ অক্ষর অনুমোদিত নয়",
    "financeHelp.transactionIdMaxLength": "সর্বোচ্চ ৪০ অক্ষর",
    "financeHelp.uploadOnlyTypesSupported":
      "শুধুমাত্র jpg, jpeg, png, gif, webp ফাইল সমর্থিত",
    "financeHelp.uploadFileSizeExceed": "ফাইলের আকার 10MB এর বেশি হতে পারবে না",
    "financeHelp.placeholder.depositOrderNumber": "ডিপোজিট অর্ডার নম্বর লিখুন",
    "financeHelp.placeholder.accountHolderName": "অ্যাকাউন্ট ধারকের নাম লিখুন",
    "financeHelp.placeholder.actualTransferAmount": "ট্রান্সফার পরিমাণ লিখুন",
    "financeHelp.placeholder.transactionId": "লেনদেন আইডি লিখুন",
    "financeHelp.placeholder.bankTransferReceipt":
      "ব্যাংক ট্রান্সফার রিসিপ্ট আপলোড করুন",
    "financeHelp.placeholder.withdrawalOrderNumber": "উইথড্রয়াল অর্ডার নম্বর লিখুন",
    "financeHelp.withdrawalOrderNumber": "উইথড্রয়াল অর্ডার নম্বর",
    "financeHelp.withdrawalQuestionTitle": "উইথড্রয়াল পাননি?",
    "financeHelp.withdrawalQuestionDesc":
      "যাচাইয়ের জন্য উইথড্রয়াল অর্ডার নম্বর জমা দিন এবং ব্যাংক ট্রান্সফার রিসিপ্ট আপলোড করুন।",
    "financeHelp.account.selectUpdateTitle": "আপডেট করার তথ্য নির্বাচন করুন",
    "financeHelp.account.modifyTypes.loginPwd": "লগইন পাসওয়ার্ড",
    "financeHelp.account.modifyTypes.fundPwd": "উত্তোলন পাসওয়ার্ড",
    "financeHelp.account.emailReviewHint":
      "পর্যালোচনার ফলাফল এবং আপনার নতুন পাসওয়ার্ড নিচের ইমেইল ঠিকানায় পাঠানো হবে।",
    "financeHelp.account.emailVerification": "ইমেইল যাচাইকরণ",
    "financeHelp.account.sendCode": "কোড পাঠান",
    "financeHelp.account.resend": "আবার পাঠান",
    "financeHelp.account.codeWillBeSentHint":
      "যাচাইকরণ কোড আপনার ইমেইলে পাঠানো হবে।",
    "financeHelp.account.checkSpamHint":
      "ইমেইল না পেলে অনুগ্রহ করে স্প্যাম বা জাঙ্ক ফোল্ডার দেখুন।",
    "financeHelp.account.invalidEmail": "অনুগ্রহ করে একটি বৈধ ইমেইল ঠিকানা লিখুন",
    "financeHelp.account.verifyEmailFirst": "অনুগ্রহ করে আগে আপনার ইমেইল যাচাই করুন",
    "financeHelp.account.fields.username": "ইউজারনেম",
    "financeHelp.account.fields.realName": "প্রকৃত নাম",
    "financeHelp.account.fields.eWallet": "ই-ওয়ালেট",
    "financeHelp.account.fields.idFrontPhoto": "পরিচয়পত্রের সামনের ছবি",
    "financeHelp.account.fields.lastPayVoucher": "সর্বশেষ সফল জমার রসিদ",
    "financeHelp.account.placeholder.email": "অনুগ্রহ করে ইমেইল লিখুন",
    "financeHelp.account.placeholder.verificationCode":
      "অনুগ্রহ করে যাচাইকরণ কোড লিখুন",
    "financeHelp.account.placeholder.username": "অনুগ্রহ করে ইউজারনেম লিখুন",
    "financeHelp.account.placeholder.realName": "অনুগ্রহ করে প্রকৃত নাম লিখুন",
    "financeHelp.account.placeholder.eWallet": "অনুগ্রহ করে ই-ওয়ালেট লিখুন",
    "financeHelp.account.placeholder.idFrontPhoto":
      "অনুগ্রহ করে পরিচয়পত্রের সামনের ছবি আপলোড করুন",
    "financeHelp.account.placeholder.lastPayVoucher":
      "অনুগ্রহ করে সর্বশেষ সফল জমার রসিদ আপলোড করুন",
    "financeHelp.account.eWalletStart0Len11":
      "অনুগ্রহ করে 0 দিয়ে শুরু হওয়া ১১ সংখ্যার নম্বর লিখুন",
    "successPage.title": "জমা দেওয়া সফল",
    "successPage.description":
      "সিস্টেম আপনার রিচার্জ তথ্য যাচাই করছে। রিচার্জ সফল হলে ১০ মিনিটের মধ্যে রিচার্জের পরিমাণ আপনার গেম অ্যাকাউন্টে যোগ করা হবে। ১০ মিনিট পরেও না পেলে অনুগ্রহ করে আবার কাস্টমার সার্ভিসের সাথে যোগাযোগ করুন। আপনার ধৈর্যের জন্য ধন্যবাদ।",
    "successPage.accountDescription":
      "আপনার অনুরোধ সফলভাবে জমা দেওয়া হয়েছে। ফলাফল আপনার ইমেইলে পাঠানো হবে। ইমেইল না পেলে অনুগ্রহ করে স্প্যাম বা জাঙ্ক ফোল্ডার দেখুন।",
    "successPage.back": "ফিরে যান",
    "withdrawalResult.title": "জরুরি প্রক্রিয়াকরণ চলছে",
    "withdrawalResult.content":
      "আপনার সমস্যাটি জরুরি প্রক্রিয়াকরণের জন্য সংশ্লিষ্ট বিভাগে পাঠানো হয়েছে। ৩০ মিনিট পরেও কোনো আপডেট না থাকলে অনুগ্রহ করে আবার কাস্টমার সার্ভিসে যোগাযোগ করুন।",
  },
  en_US: {
    "financeHelp.title": "Quick Help",
    "financeHelp.tabs.deposit": "Deposit",
    "financeHelp.tabs.withdrawal": "Withdrawal",
    "financeHelp.tabs.account": "Account",
    "financeHelp.questionTitle": "Didn't receive deposit?",
    "financeHelp.questionDesc":
      "Submit your deposit order number and upload the bank transfer receipt for verification.",
    "financeHelp.depositOrderNumber": "Deposit Order Number",
    "financeHelp.accountHolderName": "Account Holder Name",
    "financeHelp.actualTransferAmount": "Actual Transfer Amount",
    "financeHelp.transactionIdLabel": "Transaction ID",
    "financeHelp.bankTransferReceipt": "Bank Transfer Receipt",
    "financeHelp.fileSizeHint": "File size cannot exceed 10MB",
    "financeHelp.submit": "Submit",
    "financeHelp.chargeOrderIdDigitsOnly": "Digits only",
    "financeHelp.chargeOrderIdMaxLength": "Maximum 20 characters",
    "financeHelp.cardholderNameNoSpecialChars": "Special characters are not allowed",
    "financeHelp.realNameMaxLength": "Maximum 100 characters",
    "financeHelp.actualAmountMustBePositive": "Amount must be a positive number",
    "financeHelp.actualAmountMaxDecimals": "Up to 2 decimal places",
    "financeHelp.transactionIdNoSpecialChars": "Special characters are not allowed",
    "financeHelp.transactionIdMaxLength": "Maximum 40 characters",
    "financeHelp.uploadOnlyTypesSupported":
      "Only jpg, jpeg, png, gif, webp files are supported",
    "financeHelp.uploadFileSizeExceed": "File size cannot exceed 10MB",
    "financeHelp.placeholder.depositOrderNumber": "Please enter deposit order number",
    "financeHelp.placeholder.accountHolderName": "Please enter account holder name",
    "financeHelp.placeholder.actualTransferAmount": "Please enter transfer amount",
    "financeHelp.placeholder.transactionId": "Please enter transaction ID",
    "financeHelp.placeholder.bankTransferReceipt":
      "Please upload bank transfer receipt",
    "financeHelp.placeholder.withdrawalOrderNumber":
      "Please enter withdrawal order number",
    "financeHelp.withdrawalOrderNumber": "Withdrawal Order Number",
    "financeHelp.withdrawalQuestionTitle": "Didn't receive withdrawal?",
    "financeHelp.withdrawalQuestionDesc":
      "Submit your withdrawal order number for status inquiry and verification.",
    "financeHelp.account.selectUpdateTitle": "Select information to update",
    "financeHelp.account.modifyTypes.loginPwd": "Login Password",
    "financeHelp.account.modifyTypes.fundPwd": "Withdrawal Password",
    "financeHelp.account.emailReviewHint":
      "The review result and your new password will be sent to the email address below.",
    "financeHelp.account.emailVerification": "Email Verification",
    "financeHelp.account.sendCode": "Send Code",
    "financeHelp.account.resend": "Resend",
    "financeHelp.account.codeWillBeSentHint":
      "A verification code will be sent to your email.",
    "financeHelp.account.checkSpamHint":
      "If you do not receive the email, please check your spam or junk folder.",
    "financeHelp.account.invalidEmail": "Please enter a valid email address",
    "financeHelp.account.verifyEmailFirst": "Please enter the 6-digit verification code",
    "financeHelp.account.fields.username": "Username",
    "financeHelp.account.fields.realName": "Real Name",
    "financeHelp.account.fields.eWallet": "E-Wallet",
    "financeHelp.account.fields.idFrontPhoto": "ID Card Front Photo",
    "financeHelp.account.fields.lastPayVoucher": "Latest Successful Deposit Receipt",
    "financeHelp.account.placeholder.email": "Please enter email",
    "financeHelp.account.placeholder.verificationCode":
      "Please enter verification code",
    "financeHelp.account.placeholder.username": "Please enter username",
    "financeHelp.account.placeholder.realName": "Please enter real name",
    "financeHelp.account.placeholder.eWallet": "Please enter e-wallet number",
    "financeHelp.account.placeholder.idFrontPhoto":
      "Please upload ID card front photo",
    "financeHelp.account.placeholder.lastPayVoucher":
      "Please upload latest deposit receipt",
    "financeHelp.account.eWalletStart0Len11":
      "Please enter a valid 10-11 digit e-wallet number",
    "successPage.title": "Submitted Successfully",
    "successPage.description":
      "The system is verifying your recharge information. Once verified, the recharge amount will be credited to your game account within 10 minutes.",
    "successPage.accountDescription":
      "Your request has been submitted successfully. The result will be sent to your email.",
    "successPage.back": "Back",
    "withdrawalResult.title": "Urgent Processing",
    "withdrawalResult.content":
      "Your issue has been forwarded to the relevant department for urgent processing. If there is no update after 30 minutes, please contact live support.",
  },
};

// State
const state = {
  lang: localStorage.getItem("language") || "vi_VN",
  activeTab: "deposit",
  modifyType: "LOGIN_PWD",
  uploads: {
    depositReceipt: null,
    idFrontPhoto: null,
    lastPayVoucher: null,
  },
  otpTimer: null,
  otpCountdown: 0,
};

function t(key) {
  const dict = I18N[state.lang] || I18N.vi_VN;
  return dict[key] || key;
}

// Toast helper matching index-DAClxfHN.js
let toastTimer = null;
function showToast(message, duration = 2000) {
  const existing = document.querySelector(".toast-message");
  if (existing) existing.remove();
  if (toastTimer) clearTimeout(toastTimer);

  const div = document.createElement("div");
  div.className = "toast-message";
  div.textContent = message;
  document.body.appendChild(div);
  toastTimer = setTimeout(() => {
    div.remove();
    toastTimer = null;
  }, duration);
}

// Responsive root rem scaling matching Ka() in index-DAClxfHN.js
function updateViewportVariables() {
  const inner = document.querySelector(".app-inner");
  const baseWidth = 430;
  const width = inner ? inner.getBoundingClientRect().width || baseWidth : baseWidth;
  const scale = width >= baseWidth ? baseWidth / width : 1;
  document.documentElement.style.setProperty("--toast-scale", String(scale));
  document.documentElement.style.setProperty(
    "--app-inner-width",
    `${Math.min(width, baseWidth)}px`
  );
  const remSize = `${Math.min(14, (14 * width) / baseWidth)}px`;
  document.documentElement.style.setProperty("--app-rem-size", remSize);
  updateTabLine();
}

// Apply translations across the DOM
function applyLanguage(lang) {
  if (!I18N[lang]) lang = "vi_VN";
  state.lang = lang;
  localStorage.setItem("language", lang);

  const select = document.getElementById("langSelect");
  if (select && select.value !== lang) {
    select.value = lang;
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });

  clearAllErrors();
  requestAnimationFrame(updateTabLine);
}

// Tab switching & URL query sync (?tab=deposit | withdrawal | account)
function updateTabLine() {
  const activeTabEl = document.querySelector(
    `.van-tab[data-tab="${state.activeTab}"]`
  );
  const lineEl = document.getElementById("tabLine");
  if (!activeTabEl || !lineEl) return;

  const center = activeTabEl.offsetLeft + activeTabEl.offsetWidth / 2;
  lineEl.style.transform = `translateX(${center}px) translateX(-50%)`;
}

function setActiveTab(tabName, updateUrl = true) {
  const validTabs = ["deposit", "withdrawal", "account"];
  const normalized = validTabs.includes(tabName) ? tabName : "deposit";
  state.activeTab = normalized;

  document.querySelectorAll(".van-tab").forEach((tabEl) => {
    const isCurrent = tabEl.getAttribute("data-tab") === normalized;
    tabEl.classList.toggle("van-tab--active", isCurrent);
    tabEl.setAttribute("aria-selected", isCurrent ? "true" : "false");
    tabEl.setAttribute("tabindex", isCurrent ? "0" : "-1");
  });

  validTabs.forEach((name) => {
    const panel = document.getElementById(`panel-${name}`);
    if (panel) {
      panel.classList.toggle("hidden", name !== normalized);
    }
  });

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", normalized);
    window.history.replaceState({}, "", url.toString());
  }

  clearAllErrors();
  requestAnimationFrame(updateTabLine);
}

// Field validation helpers
function setFieldError(fieldId, message) {
  const cell = document.getElementById(`cell-${fieldId}`);
  const errEl = document.getElementById(`err-${fieldId}`);
  if (cell) cell.classList.toggle("has-error", Boolean(message));
  if (errEl) errEl.textContent = message || "";
  return !message;
}

function clearAllErrors() {
  document.querySelectorAll(".van-cell.has-error").forEach((el) => {
    el.classList.remove("has-error");
  });
  document
    .querySelectorAll(".van-field__error-message, .upload-field-error")
    .forEach((el) => {
      el.textContent = "";
    });
}

// Exact validators from chargeFieldConfig-D4thY5iO.js
const SAFE_TEXT_REGEX = /^[\p{L}\p{N}\s\-']*$/u;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateChargeOrderId() {
  const val = document.getElementById("chargeOrderId").value.trim();
  if (!val) return setFieldError("chargeOrderId", t("financeHelp.placeholder.depositOrderNumber"));
  if (!/^\d+$/.test(val))
    return setFieldError("chargeOrderId", t("financeHelp.chargeOrderIdDigitsOnly"));
  if (val.length > 20)
    return setFieldError("chargeOrderId", t("financeHelp.chargeOrderIdMaxLength"));
  return setFieldError("chargeOrderId", "");
}

function validateCardholderName() {
  const val = document.getElementById("cardholderName").value.trim();
  if (!val)
    return setFieldError("cardholderName", t("financeHelp.placeholder.accountHolderName"));
  if (!SAFE_TEXT_REGEX.test(val))
    return setFieldError("cardholderName", t("financeHelp.cardholderNameNoSpecialChars"));
  if (val.length > 100)
    return setFieldError("cardholderName", t("financeHelp.realNameMaxLength"));
  return setFieldError("cardholderName", "");
}

function validateActualAmount() {
  const val = document.getElementById("actualAmount").value.trim();
  if (!val || val === ".")
    return setFieldError("actualAmount", t("financeHelp.placeholder.actualTransferAmount"));
  const num = parseFloat(val);
  if (!Number.isFinite(num) || num <= 0)
    return setFieldError("actualAmount", t("financeHelp.actualAmountMustBePositive"));
  const parts = val.split(".");
  if (parts.length === 2 && parts[1].length > 2)
    return setFieldError("actualAmount", t("financeHelp.actualAmountMaxDecimals"));
  return setFieldError("actualAmount", "");
}

function validateTransactionId() {
  const val = document.getElementById("transactionId").value.trim();
  if (!val)
    return setFieldError("transactionId", t("financeHelp.placeholder.transactionId"));
  if (!SAFE_TEXT_REGEX.test(val))
    return setFieldError("transactionId", t("financeHelp.transactionIdNoSpecialChars"));
  if (val.length > 40)
    return setFieldError("transactionId", t("financeHelp.transactionIdMaxLength"));
  return setFieldError("transactionId", "");
}

function validateUpload(uploaderKey, requiredMsgKey) {
  const errEl = document.getElementById(`err-${uploaderKey}`);
  if (!state.uploads[uploaderKey]) {
    if (errEl) errEl.textContent = t(requiredMsgKey);
    return false;
  }
  if (errEl) errEl.textContent = "";
  return true;
}

// File Upload & Client-Side Canvas Compression (<= 10MB input, compressed if > 5MB)
const ALLOWED_EXTS = ["jpg", "jpeg", "png", "gif", "webp"];
const MAX_UPLOAD_MB = 10;

function setupUploader(uploaderKey) {
  const fileInput = document.getElementById(`file-${uploaderKey}`);
  const previewBox = document.getElementById(`preview-${uploaderKey}`);
  const previewImg = document.getElementById(`img-${uploaderKey}`);
  const placeholder = document.getElementById(`placeholder-${uploaderKey}`);
  const errEl = document.getElementById(`err-${uploaderKey}`);
  const deleteBtn = document.querySelector(`[data-delete-upload="${uploaderKey}"]`);

  if (!fileInput) return;

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const ext = (file.name.split(".").pop() || "").toLowerCase();
    if (!ALLOWED_EXTS.includes(ext)) {
      const msg = t("financeHelp.uploadOnlyTypesSupported");
      if (errEl) errEl.textContent = msg;
      showToast(msg);
      fileInput.value = "";
      return;
    }

    if (file.size > MAX_UPLOAD_MB * 1024 * 1024) {
      const msg = t("financeHelp.uploadFileSizeExceed");
      if (errEl) errEl.textContent = msg;
      showToast(msg);
      fileInput.value = "";
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    state.uploads[uploaderKey] = { file, objectUrl };
    if (previewImg) previewImg.src = objectUrl;
    if (previewBox) previewBox.classList.remove("hidden");
    if (placeholder) placeholder.classList.add("hidden");
    if (errEl) errEl.textContent = "";
  });

  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      if (state.uploads[uploaderKey]?.objectUrl) {
        URL.revokeObjectURL(state.uploads[uploaderKey].objectUrl);
      }
      state.uploads[uploaderKey] = null;
      fileInput.value = "";
      if (previewImg) previewImg.src = "";
      if (previewBox) previewBox.classList.add("hidden");
      if (placeholder) placeholder.classList.remove("hidden");
    });
  }

  if (previewImg) {
    previewImg.addEventListener("click", () => {
      const lightbox = document.getElementById("lightboxModal");
      const lightboxImg = document.getElementById("lightboxImage");
      if (lightbox && lightboxImg && previewImg.src) {
        lightboxImg.src = previewImg.src;
        lightbox.classList.add("is-open");
      }
    });
  }
}

// Show Success Page view
function showSuccessPage(variant = "deposit") {
  const mainView = document.getElementById("mainView");
  const successView = document.getElementById("successView");
  const successDesc = document.getElementById("successDesc");

  if (successDesc) {
    const key =
      variant === "account"
        ? "successPage.accountDescription"
        : "successPage.description";
    successDesc.setAttribute("data-i18n", key);
    successDesc.textContent = t(key);
  }

  mainView.classList.add("hidden");
  successView.classList.remove("hidden");
}

function resetForms() {
  document.getElementById("depositForm").reset();
  document.getElementById("withdrawalForm").reset();
  document.getElementById("accountForm").reset();

  ["depositReceipt", "idFrontPhoto", "lastPayVoucher"].forEach((key) => {
    const delBtn = document.querySelector(`[data-delete-upload="${key}"]`);
    if (delBtn) delBtn.click();
  });

  clearAllErrors();
}

// Initialize DOM listeners
document.addEventListener("DOMContentLoaded", () => {
  // Read initial ?tab= from URL
  const params = new URLSearchParams(window.location.search);
  const initialTab = (params.get("tab") || "deposit").toLowerCase();

  // Language switcher
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      applyLanguage(e.target.value);
    });
  }

  // Tabs click handler
  document.querySelectorAll(".van-tab").forEach((tabEl) => {
    tabEl.addEventListener("click", () => {
      const targetTab = tabEl.getAttribute("data-tab");
      setActiveTab(targetTab, true);
    });
  });

  // Input live sanitizers matching General-C7rFi6CH.js
  const chargeOrderInput = document.getElementById("chargeOrderId");
  chargeOrderInput.addEventListener("input", () => {
    chargeOrderInput.value = chargeOrderInput.value.replace(/\D/g, "").slice(0, 20);
    validateChargeOrderId();
  });

  const cardholderInput = document.getElementById("cardholderName");
  cardholderInput.addEventListener("input", () => {
    cardholderInput.value = cardholderInput.value
      .replace(/[^\p{L}\p{N}\s\-']/gu, "")
      .slice(0, 100);
    validateCardholderName();
  });

  const amountInput = document.getElementById("actualAmount");
  amountInput.addEventListener("input", () => {
    let val = amountInput.value.replace(/[^0-9.]/g, "");
    const parts = val.split(".");
    if (parts.length > 2) {
      val = `${parts[0]}.${parts.slice(1).join("")}`;
    }
    if (parts.length === 2 && parts[1].length > 2) {
      val = `${parts[0]}.${parts[1].slice(0, 2)}`;
    }
    amountInput.value = val.slice(0, 15);
    validateActualAmount();
  });

  const txIdInput = document.getElementById("transactionId");
  txIdInput.addEventListener("input", () => {
    txIdInput.value = txIdInput.value
      .replace(/[^\p{L}\p{N}\s\-']/gu, "")
      .slice(0, 40);
    validateTransactionId();
  });

  const withdrawalInput = document.getElementById("withdrawalOrderId");
  withdrawalInput.addEventListener("input", () => {
    withdrawalInput.value = withdrawalInput.value.replace(/\D/g, "").slice(0, 20);
    setFieldError("withdrawalOrderId", "");
  });

  // Setup uploaders
  setupUploader("depositReceipt");
  setupUploader("idFrontPhoto");
  setupUploader("lastPayVoucher");

  // Deposit Form Submit
  document.getElementById("depositForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const v1 = validateChargeOrderId();
    const v2 = validateCardholderName();
    const v3 = validateActualAmount();
    const v4 = validateTransactionId();
    const v5 = validateUpload(
      "depositReceipt",
      "financeHelp.placeholder.bankTransferReceipt"
    );

    if (v1 && v2 && v3 && v4 && v5) {
      showSuccessPage("deposit");
    }
  });

  // Withdrawal Form Submit
  document.getElementById("withdrawalForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const val = withdrawalInput.value.trim();
    if (!val) {
      setFieldError(
        "withdrawalOrderId",
        t("financeHelp.placeholder.withdrawalOrderNumber")
      );
      return;
    }
    setFieldError("withdrawalOrderId", "");

    // Open ResultDialog matching withdrawalTabContent
    document.getElementById("resultDialogTitle").textContent = t(
      "withdrawalResult.title"
    );
    document.getElementById("resultDialogContent").textContent = t(
      "withdrawalResult.content"
    );
    document.getElementById("resultModal").classList.add("is-open");
  });

  // Close ResultDialog
  const closeResultModal = () => {
    document.getElementById("resultModal").classList.remove("is-open");
  };
  document
    .getElementById("closeResultModal")
    .addEventListener("click", closeResultModal);
  document
    .getElementById("resultDialogActionBtn")
    .addEventListener("click", closeResultModal);

  // Account Radio Group
  document.querySelectorAll(".van-radio").forEach((radioEl) => {
    radioEl.addEventListener("click", () => {
      document
        .querySelectorAll(".van-radio")
        .forEach((r) => r.classList.remove("is-checked"));
      radioEl.classList.add("is-checked");
      state.modifyType = radioEl.getAttribute("data-radio-value");
    });
  });

  // Account Form Submit -> Opens Email Verification Dialog
  document.getElementById("accountForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("notifyEmail").value.trim();
    const username = document.getElementById("username").value.trim();
    const realName = document.getElementById("realName").value.trim();
    const eWallet = document.getElementById("eWallet").value.trim();

    const okEmail = EMAIL_REGEX.test(email)
      ? setFieldError("notifyEmail", "")
      : setFieldError("notifyEmail", t("financeHelp.account.invalidEmail"));
    const okUser = username
      ? setFieldError("username", "")
      : setFieldError(
          "username",
          t("financeHelp.account.placeholder.username")
        );
    const okReal = realName
      ? setFieldError("realName", "")
      : setFieldError(
          "realName",
          t("financeHelp.account.placeholder.realName")
        );
    const okWallet = /^\d{10,11}$/.test(eWallet)
      ? setFieldError("eWallet", "")
      : setFieldError("eWallet", t("financeHelp.account.eWalletStart0Len11"));
    const okFront = validateUpload(
      "idFrontPhoto",
      "financeHelp.account.placeholder.idFrontPhoto"
    );
    const okVoucher = validateUpload(
      "lastPayVoucher",
      "financeHelp.account.placeholder.lastPayVoucher"
    );

    if (okEmail && okUser && okReal && okWallet && okFront && okVoucher) {
      document.getElementById("verifyEmailDisplay").textContent = email;
      document.getElementById("emailOtpCode").value = "";
      document.getElementById("verifyModal").classList.add("is-open");
    }
  });

  // Email OTP Send Code & Verify
  const sendCodeBtn = document.getElementById("sendCodeBtn");
  const sendCodeBtnText = document.getElementById("sendCodeBtnText");
  sendCodeBtn.addEventListener("click", () => {
    if (state.otpCountdown > 0) return;
    state.otpCountdown = 60;
    sendCodeBtn.disabled = true;
    sendCodeBtnText.textContent = `${state.otpCountdown} s`;

    if (state.otpTimer) clearInterval(state.otpTimer);
    state.otpTimer = setInterval(() => {
      state.otpCountdown -= 1;
      if (state.otpCountdown <= 0) {
        clearInterval(state.otpTimer);
        state.otpTimer = null;
        sendCodeBtn.disabled = false;
        sendCodeBtnText.textContent = t("financeHelp.account.resend");
      } else {
        sendCodeBtnText.textContent = `${state.otpCountdown} s`;
      }
    }, 1000);
  });

  document.getElementById("closeVerifyModal").addEventListener("click", () => {
    document.getElementById("verifyModal").classList.remove("is-open");
  });

  document.getElementById("confirmVerifyBtn").addEventListener("click", () => {
    const code = document
      .getElementById("emailOtpCode")
      .value.replace(/\D/g, "");
    if (code.length !== 6) {
      showToast(t("financeHelp.account.verifyEmailFirst"));
      return;
    }
    document.getElementById("verifyModal").classList.remove("is-open");
    showSuccessPage("account");
  });

  // Back button on Success Page
  document.getElementById("backBtn").addEventListener("click", () => {
    document.getElementById("successView").classList.add("hidden");
    document.getElementById("mainView").classList.remove("hidden");
    resetForms();
    requestAnimationFrame(updateTabLine);
  });

  // Lightbox close
  document.getElementById("closeLightbox").addEventListener("click", () => {
    document.getElementById("lightboxModal").classList.remove("is-open");
  });
  document.getElementById("lightboxModal").addEventListener("click", (e) => {
    if (e.target.id === "lightboxModal") {
      e.currentTarget.classList.remove("is-open");
    }
  });

  // Apply initial state
  applyLanguage(state.lang);
  setActiveTab(initialTab, false);
  updateViewportVariables();
  window.addEventListener("resize", updateViewportVariables);
});
