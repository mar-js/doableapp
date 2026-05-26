module ReactHelper
  def react_component(name, props: {}, **html_options)
    tag.div(
      "",
      **html_options,
      data: {
        react_component: name,
        react_props: props.to_json
      }
    )
  end
end
