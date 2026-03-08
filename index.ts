// Parrot UI 组件库主入口
// 所有组件统一从 packages/parrotui-core 导出

export * from './packages/parrotui-core/index'

// Type Definitions
export interface ParrotComponent {
	name: string
	description: string
	version: string
	author: string
}
