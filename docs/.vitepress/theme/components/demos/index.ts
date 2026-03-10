// Demo 组件静态导入（避免 41 个动态 import 导致 Rollup 在 CI 上超时）
import ColorDemo from './ColorDemo.vue'
import TextDemo from './TextDemo.vue'
import ButtonDemo from './ButtonDemo.vue'
import IconDemo from './IconDemo.vue'
import BadgeDemo from './BadgeDemo.vue'
import TagDemo from './TagDemo.vue'
import AvatarDemo from './AvatarDemo.vue'
import SwitchDemo from './SwitchDemo.vue'
import SliderDemo from './SliderDemo.vue'
import ProgressDemo from './ProgressDemo.vue'
import DividerDemo from './DividerDemo.vue'
import SpinnerDemo from './SpinnerDemo.vue'
import ImageDemo from './ImageDemo.vue'
import LinkDemo from './LinkDemo.vue'
import RatingDemo from './RatingDemo.vue'
import HeadingDemo from './HeadingDemo.vue'
import ParagraphDemo from './ParagraphDemo.vue'
import LabelDemo from './LabelDemo.vue'
import CaptionDemo from './CaptionDemo.vue'
import CodeDemo from './CodeDemo.vue'
import QuoteDemo from './QuoteDemo.vue'
import NumberDemo from './NumberDemo.vue'
import StatisticDemo from './StatisticDemo.vue'
import CounterDemo from './CounterDemo.vue'
import CountdownDemo from './CountdownDemo.vue'
import CurrencyDemo from './CurrencyDemo.vue'
import PercentageDemo from './PercentageDemo.vue'
import IconButtonDemo from './IconButtonDemo.vue'
import ButtonGroupDemo from './ButtonGroupDemo.vue'
import ChipDemo from './ChipDemo.vue'
import AvatarGroupDemo from './AvatarGroupDemo.vue'
import PictureDemo from './PictureDemo.vue'
import AspectRatioDemo from './AspectRatioDemo.vue'
import SkeletonDemo from './SkeletonDemo.vue'
import CircularProgressDemo from './CircularProgressDemo.vue'
import RangeSliderDemo from './RangeSliderDemo.vue'
import SpacerDemo from './SpacerDemo.vue'
import HighlightDemo from './HighlightDemo.vue'
import ClipboardDemo from './ClipboardDemo.vue'
import CopyButtonDemo from './CopyButtonDemo.vue'
import VisuallyHiddenDemo from './VisuallyHiddenDemo.vue'

export const demoRegistry: Record<string, any> = {
  ColorDemo, TextDemo, ButtonDemo, IconDemo, BadgeDemo,
  TagDemo, AvatarDemo, SwitchDemo, SliderDemo, ProgressDemo,
  DividerDemo, SpinnerDemo, ImageDemo, LinkDemo, RatingDemo,
  HeadingDemo, ParagraphDemo, LabelDemo, CaptionDemo, CodeDemo,
  QuoteDemo, NumberDemo, StatisticDemo, CounterDemo, CountdownDemo,
  CurrencyDemo, PercentageDemo, IconButtonDemo, ButtonGroupDemo,
  ChipDemo, AvatarGroupDemo, PictureDemo, AspectRatioDemo,
  SkeletonDemo, CircularProgressDemo, RangeSliderDemo, SpacerDemo,
  HighlightDemo, ClipboardDemo, CopyButtonDemo, VisuallyHiddenDemo,
}
