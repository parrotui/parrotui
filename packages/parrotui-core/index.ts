// parrotui-core 组件导出总入口
// 14 分类 · 167 组件 + Composables + Directives + Utils + Tokens

// ==================== 基础组件 basic (25) ====================
export { default as ParrotButton }      from './components/basic/Button/parrot-button.uvue'
export { default as ParrotIcon }        from './components/basic/Icon/parrot-icon.uvue'
export { default as ParrotText }        from './components/basic/Text/parrot-text.uvue'
export { default as ParrotColor }       from './components/basic/Color/parrot-color.uvue'
export { default as ParrotNumber }      from './components/basic/Number/parrot-number.uvue'
export { default as ParrotFooter }      from './components/basic/Footer/parrot-footer.uvue'
// ── 新增基础组件 (19) ──
export { default as ParrotHeading }     from './components/basic/Heading/parrot-heading.uvue'
export { default as ParrotParagraph }   from './components/basic/Paragraph/parrot-paragraph.uvue'
export { default as ParrotCaption }     from './components/basic/Caption/parrot-caption.uvue'
export { default as ParrotCode }        from './components/basic/Code/parrot-code.uvue'
export { default as ParrotQuote }       from './components/basic/Quote/parrot-quote.uvue'
export { default as ParrotStatistic }   from './components/basic/Statistic/parrot-statistic.uvue'
export { default as ParrotCounter }     from './components/basic/Counter/parrot-counter.uvue'
export { default as ParrotCurrency }    from './components/basic/Currency/parrot-currency.uvue'
export { default as ParrotPercentage }  from './components/basic/Percentage/parrot-percentage.uvue'
export { default as ParrotIconButton }  from './components/basic/IconButton/parrot-icon-button.uvue'
export { default as ParrotButtonGroup } from './components/basic/ButtonGroup/parrot-button-group.uvue'
export { default as ParrotChip }        from './components/basic/Chip/parrot-chip.uvue'
export { default as ParrotSpacer }      from './components/basic/Spacer/parrot-spacer.uvue'
export { default as ParrotImage }       from './components/basic/Image/parrot-image.uvue'
export { default as ParrotPicture }     from './components/basic/Picture/parrot-picture.uvue'
export { default as ParrotAspectRatio } from './components/basic/AspectRatio/parrot-aspect-ratio.uvue'
export { default as ParrotRangeSlider } from './components/basic/RangeSlider/parrot-range-slider.uvue'
export { default as ParrotHighlight }   from './components/basic/Highlight/parrot-highlight.uvue'
export { default as ParrotSvgIcon }     from './components/basic/SvgIcon/parrot-svg-icon.uvue'

// ==================== 展示组件 display (16) ====================
export { default as ParrotBadge }       from './components/display/Badge/parrot-badge.uvue'
export { default as ParrotTag }         from './components/display/Tag/parrot-tag.uvue'
export { default as ParrotAvatar }      from './components/display/Avatar/parrot-avatar.uvue'
export { default as ParrotAvatarGroup } from './components/display/AvatarGroup/parrot-avatar-group.uvue'
export { default as ParrotDivider }     from './components/display/Divider/parrot-divider.uvue'
export { default as ParrotSection }     from './components/display/Section/parrot-section.uvue'
export { default as ParrotSkeleton }    from './components/display/Skeleton/parrot-skeleton.uvue'
export { default as ParrotNoticeBar }   from './components/display/NoticeBar/parrot-notice-bar.uvue'
export { default as ParrotFooterLinks } from './components/display/FooterLinks/parrot-footer-links.uvue'
export { default as ParrotTimeAxis }    from './components/display/TimeAxis/parrot-time-axis.uvue'
export { default as ParrotIndexCard }   from './components/display/IndexCard/parrot-index-card.uvue'
export { default as ParrotProductCard } from './components/display/ProductCard/parrot-product-card.uvue'
export { default as ParrotTradeItem }   from './components/display/TradeItem/parrot-trade-item.uvue'
export { default as ParrotDataTag }     from './components/display/DataTag/parrot-data-tag.uvue'
export { default as ParrotSwiperDot }   from './components/display/SwiperDot/parrot-swiper-dot.uvue'
export { default as ParrotResult }      from './components/display/Result/parrot-result.uvue'

// ==================== 表单组件 form (24) ====================
export { default as ParrotInput }       from './components/form/Input/parrot-input.uvue'
export { default as ParrotLabel }       from './components/form/Label/parrot-label.uvue'
export { default as ParrotForm }        from './components/form/Form/parrot-form.uvue'
export { default as ParrotFormItem }    from './components/form/FormItem/parrot-form-item.uvue'
export { default as ParrotSelect }      from './components/form/Select/parrot-select.uvue'
export { default as ParrotPicker }      from './components/form/Picker/parrot-picker.uvue'
export { default as ParrotDatePicker }  from './components/form/DatePicker/parrot-date-picker.uvue'
export { default as ParrotCalendar }    from './components/form/Calendar/parrot-calendar.uvue'
export { default as ParrotCascader }    from './components/form/Cascader/parrot-cascader.uvue'
export { default as ParrotRate }        from './components/form/Rate/parrot-rate.uvue'
export { default as ParrotUpload }      from './components/form/Upload/parrot-upload.uvue'
export { default as ParrotUploadVideo } from './components/form/UploadVideo/parrot-upload-video.uvue'
export { default as ParrotInputNumber } from './components/form/InputNumber/parrot-input-number.uvue'
export { default as ParrotSlider }      from './components/form/Slider/parrot-slider.uvue'
export { default as ParrotTextarea }    from './components/form/Textarea/parrot-textarea.uvue'
export { default as ParrotCheckboxGroup } from './components/form/CheckboxGroup/parrot-checkbox-group.uvue'
export { default as ParrotCheckbox }    from './components/form/Checkbox/parrot-checkbox.uvue'
export { default as ParrotRadioGroup }  from './components/form/RadioGroup/parrot-radio-group.uvue'
export { default as ParrotRadio }       from './components/form/Radio/parrot-radio.uvue'
export { default as ParrotSwitch }      from './components/form/Switch/parrot-switch.uvue'
export { default as ParrotSearchBar }   from './components/form/SearchBar/parrot-search-bar.uvue'
export { default as ParrotDigitalKeyboard } from './components/form/DigitalKeyboard/parrot-digital-keyboard.uvue'
export { default as ParrotSingleInput } from './components/form/SingleInput/parrot-single-input.uvue'
export { default as ParrotLicensePlate } from './components/form/LicensePlate/parrot-license-plate.uvue'

// ==================== 数据组件 data (7) ====================
export { default as ParrotList }        from './components/data/List/parrot-list.uvue'
export { default as ParrotListCell }    from './components/data/ListCell/parrot-list-cell.uvue'
export { default as ParrotPagination }  from './components/data/Pagination/parrot-pagination.uvue'
export { default as ParrotTable }       from './components/data/Table/parrot-table.uvue'
export { default as ParrotProgress }    from './components/data/Progress/parrot-progress.uvue'
export { default as ParrotCircle }      from './components/data/Circle/parrot-circle.uvue'
export { default as ParrotCountDown }   from './components/data/CountDown/parrot-count-down.uvue'

// ==================== 操作反馈 feedback (6) ====================
export { default as ParrotMessage }     from './components/feedback/Message/parrot-message.uvue'
export { default as ParrotToast }       from './components/feedback/Toast/parrot-toast.uvue'
export { default as ParrotAlert }       from './components/feedback/Alert/parrot-alert.uvue'
export { default as ParrotLoading }     from './components/feedback/Loading/parrot-loading.uvue'
export { default as ParrotSpin }        from './components/feedback/Spin/parrot-spin.uvue'
export { default as ParrotLoadAni }     from './components/feedback/LoadAni/parrot-load-ani.uvue'

// ==================== 导航组件 navigation (18) ====================
export { default as ParrotNavBar }      from './components/navigation/NavBar/parrot-nav-bar.uvue'
export { default as ParrotTab }         from './components/navigation/Tab/parrot-tab.uvue'
export { default as ParrotTabs }        from './components/navigation/Tabs/parrot-tabs.uvue'
export { default as ParrotTabbar }      from './components/navigation/Tabbar/parrot-tabbar.uvue'
export { default as ParrotBottomNavbar } from './components/navigation/BottomNavbar/parrot-bottom-navbar.uvue'
export { default as ParrotBreadcrumb }  from './components/navigation/Breadcrumb/parrot-breadcrumb.uvue'
export { default as ParrotSteps }       from './components/navigation/Steps/parrot-steps.uvue'
export { default as ParrotLink }        from './components/navigation/Link/parrot-link.uvue'
export { default as ParrotMenu }        from './components/navigation/Menu/parrot-menu.uvue'
export { default as ParrotDropdownMenu } from './components/navigation/DropdownMenu/parrot-dropdown-menu.uvue'
export { default as ParrotDropdownList } from './components/navigation/DropdownList/parrot-dropdown-list.uvue'
export { default as ParrotVtabs }       from './components/navigation/Vtabs/parrot-vtabs.uvue'
export { default as ParrotSegmentedControl } from './components/navigation/SegmentedControl/parrot-segmented-control.uvue'
export { default as ParrotIndexList }   from './components/navigation/IndexList/parrot-index-list.uvue'
export { default as ParrotLoadmore }    from './components/navigation/Loadmore/parrot-loadmore.uvue'
export { default as ParrotSticky }      from './components/navigation/Sticky/parrot-sticky.uvue'
export { default as ParrotSwipeAction } from './components/navigation/SwipeAction/parrot-swipe-action.uvue'
export { default as ParrotFab }         from './components/navigation/Fab/parrot-fab.uvue'

// ==================== 弹层组件 overlay (13) ====================
export { default as ParrotBackdrop }    from './components/overlay/Backdrop/parrot-backdrop.uvue'
export { default as ParrotActionSheet } from './components/overlay/ActionSheet/parrot-action-sheet.uvue'
export { default as ParrotDialog }      from './components/overlay/Dialog/parrot-dialog.uvue'
export { default as ParrotDrawer }      from './components/overlay/Drawer/parrot-drawer.uvue'
export { default as ParrotPopup }       from './components/overlay/Popup/parrot-popup.uvue'
export { default as ParrotModal }       from './components/overlay/Modal/parrot-modal.uvue'
export { default as ParrotBottomPopup } from './components/overlay/BottomPopup/parrot-bottom-popup.uvue'
export { default as ParrotTopPopup }    from './components/overlay/TopPopup/parrot-top-popup.uvue'
export { default as ParrotGallery }     from './components/overlay/Gallery/parrot-gallery.uvue'
export { default as ParrotLandscape }   from './components/overlay/Landscape/parrot-landscape.uvue'
export { default as ParrotFilterDrawer } from './components/overlay/FilterDrawer/parrot-filter-drawer.uvue'
export { default as ParrotBubbleBox }   from './components/overlay/BubbleBox/parrot-bubble-box.uvue'
export { default as ParrotShareSheet }  from './components/overlay/ShareSheet/parrot-share-sheet.uvue'

// ==================== 布局组件 layout (16) ====================
export { default as ParrotLayout }      from './components/layout/Layout/parrot-layout.uvue'
export { default as ParrotGrid }        from './components/layout/Grid/parrot-grid.uvue'
export { default as ParrotGridItem }    from './components/layout/GridItem/parrot-grid-item.uvue'
export { default as ParrotCard }        from './components/layout/Card/parrot-card.uvue'
export { default as ParrotRow }         from './components/layout/Row/parrot-row.uvue'
export { default as ParrotCol }         from './components/layout/Col/parrot-col.uvue'
export { default as ParrotCollapse }    from './components/layout/Collapse/parrot-collapse.uvue'
export { default as ParrotCollapseItem } from './components/layout/CollapseItem/parrot-collapse-item.uvue'
export { default as ParrotEmpty }       from './components/layout/Empty/parrot-empty.uvue'
export { default as ParrotPanel }       from './components/layout/Panel/parrot-panel.uvue'
export { default as ParrotMovableView } from './components/layout/MovableView/parrot-movable-view.uvue'
export { default as ParrotPreview }     from './components/layout/Preview/parrot-preview.uvue'
export { default as ParrotHorizontalScroll } from './components/layout/HorizontalScroll/parrot-horizontal-scroll.uvue'
export { default as ParrotBackgroundImage }  from './components/layout/BackgroundImage/parrot-background-image.uvue'
export { default as ParrotBannerArc }   from './components/layout/BannerArc/parrot-banner-arc.uvue'
export { default as ParrotWaterfall }   from './components/layout/Waterfall/parrot-waterfall.uvue'

// ==================== 动效组件 motion (4) ====================
export { default as ParrotAnimation }   from './components/motion/Animation/parrot-animation.uvue'
export { default as ParrotLottie }      from './components/motion/Lottie/parrot-lottie.uvue'
export { default as ParrotDigitalRoller } from './components/motion/DigitalRoller/parrot-digital-roller.uvue'
export { default as ParrotCubicBezier } from './components/motion/CubicBezier/parrot-cubic-bezier.uvue'

// ==================== 画布组件 canvas (4) ====================
export { default as ParrotPoster }      from './components/canvas/Poster/parrot-poster.uvue'
export { default as ParrotQrcode }      from './components/canvas/Qrcode/parrot-qrcode.uvue'
export { default as ParrotBarcode }     from './components/canvas/Barcode/parrot-barcode.uvue'
export { default as ParrotAutograph }   from './components/canvas/Autograph/parrot-autograph.uvue'

// ==================== 工具组件 utility (13) ====================
export { default as ParrotStatusBar }   from './components/utility/StatusBar/parrot-status-bar.uvue'
export { default as ParrotWhiteSpace }  from './components/utility/WhiteSpace/parrot-white-space.uvue'
export { default as ParrotWingBlank }   from './components/utility/WingBlank/parrot-wing-blank.uvue'
export { default as ParrotCss }         from './components/utility/Css/parrot-css.uvue'
export { default as ParrotThemeToggle } from './components/utility/ThemeToggle/theme-toggle.uvue'
export { default as ParrotCopyText }    from './components/utility/CopyText/parrot-copy-text.uvue'
export { default as ParrotBacktop }     from './components/utility/Backtop/parrot-backtop.uvue'
export { default as ParrotSafeArea }    from './components/utility/SafeArea/parrot-safe-area.uvue'
export { default as ParrotLazyload }    from './components/utility/Lazyload/parrot-lazyload.uvue'
export { default as ParrotTimer }       from './components/utility/Timer/parrot-timer.uvue'
export { default as ParrotCountdownVerify } from './components/utility/CountdownVerify/parrot-countdown-verify.uvue'
export { default as ParrotParse }       from './components/utility/Parse/parrot-parse.uvue'
export { default as ParrotOverflowHidden } from './components/utility/OverflowHidden/parrot-overflow-hidden.uvue'

// ==================== 扩展组件 extended (8) ====================
export { default as ParrotFilterBar }   from './components/extended/FilterBar/parrot-filter-bar.uvue'
export { default as ParrotSlideVerify } from './components/extended/SlideVerify/parrot-slide-verify.uvue'
export { default as ParrotRotateVerify } from './components/extended/RotateVerify/parrot-rotate-verify.uvue'
export { default as ParrotSliderCaptcha } from './components/extended/SliderCaptcha/parrot-slider-captcha.uvue'
export { default as ParrotPuzzleVerify } from './components/extended/PuzzleVerify/parrot-puzzle-verify.uvue'
export { default as ParrotImageCropper } from './components/extended/ImageCropper/parrot-image-cropper.uvue'
export { default as ParrotDrag }        from './components/extended/Drag/parrot-drag.uvue'
export { default as ParrotTableWeex }   from './components/extended/TableWeex/parrot-table-weex.uvue'

// ==================== 实验组件 experimental (5) ====================
export { default as ParrotGestureHandler } from './components/experimental/GestureHandler/parrot-gesture-handler.uvue'
export { default as ParrotVirtualList } from './components/experimental/VirtualList/parrot-virtual-list.uvue'
export { default as ParrotSkeleton3D }  from './components/experimental/Skeleton3D/parrot-skeleton-3d.uvue'
export { default as ParrotVoiceInput }  from './components/experimental/VoiceInput/parrot-voice-input.uvue'
export { default as ParrotAIAssist }    from './components/experimental/AIAssist/parrot-ai-assist.uvue'

// ==================== 系统组件 system (6) ====================
export { default as ParrotNotification } from './components/system/Notification/parrot-notification.uvue'
export { default as ParrotAuth }        from './components/system/Auth/parrot-auth.uvue'
export { default as ParrotPermission }  from './components/system/Permission/parrot-permission.uvue'
export { default as ParrotLogger }      from './components/system/Logger/parrot-logger.uvue'
export { default as ParrotSettings }    from './components/system/Settings/parrot-settings.uvue'
export { default as ParrotUpdater }     from './components/system/Updater/parrot-updater.uvue'

// ==================== Composables 组合式 API ====================
export { useColor } from './composables/useColor'
export type { ShadeLevel, ShadeMap } from './composables/useColor'

export { useResponsive } from './composables/useResponsive'
export type { Breakpoint, Platform, Orientation } from './composables/useResponsive'

export { useLocale } from './composables/useLocale'
export type { Messages, LangCode } from './composables/useLocale'

export { useTheme } from './composables/useTheme'
export type { ThemePatch, ThemeMode } from './composables/useTheme'

// ==================== Directives 指令工具 ====================
export { copyText, readClipboard } from './directives/vcopy'
export type { CopyOptions } from './directives/vcopy'

export { showLoading, hideLoading, useLoading } from './directives/vloading'
export type { LoadingOptions } from './directives/vloading'

export {
  usePermission,
  setPermissions,
  setRoles,
  setSuperAdmin,
  hasPermission,
  hasRole,
  clearPermissions,
} from './directives/vpermission'
export type { PermissionCode, RoleCode } from './directives/vpermission'

// ==================== Utils 工具函数 ====================
export {
  hexToRgb,
  rgbToHex,
  mixColors,
  withOpacity,
  contrastColor,
  lighten,
  darken,
} from './utils/color'

export { getRect, getRects, scrollTo, scrollToTop, scrollToElement } from './utils/dom'
export type { Rect } from './utils/dom'

export { eventBus, debounce, throttle } from './utils/event'

export {
  validate,
  validateFields,
  rules,
  isPhone,
  isEmail,
  isIdCard,
  isUrl,
  isNumeric,
  isAmount,
  isChinese,
  isCreditCode,
  isPostCode,
  isNotEmpty,
} from './utils/validator'
export type { ValidationRule, ValidationResult } from './utils/validator'

// ==================== Tokens 设计令牌 ====================
export {
  colors,
  palette,
  primaryColors,
  secondaryColors,
  successColors,
  warningColors,
  dangerColors,
  infoColors,
  neutralColors,
  textColors,
  bgColors,
  borderColors,
  specialColors,
} from './tokens/colors'
export type { ColorKey, PaletteKey } from './tokens/colors'
