
type GroupProps = {
  name: string
}[]

export type RoutePathProps = {
  [key: string]: {
    path: string
    private: boolean
    title: string
    paths?: string[]
    component?: string
    code?: string
    group?: GroupProps
  }
}
