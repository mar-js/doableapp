module SvgHelper
  def svg_icon(name, options = {})
    file = Rails.root.join("app", "assets", "images", "#{name}.svg")
    return unless File.exist?(file)

    svg = File.read(file)

    # Limpia xmlns y posibles width/height existentes para evitar duplicados
    svg = svg.gsub(/\s+xmlns="[^"]+"/, "")
    svg = svg.gsub(/\s(width|height)="[^"]*"/, "")

    attrs = []
    attrs << %(class="#{h(options[:class])}") if options[:class].present?
    if options[:aria_label].present?
      attrs << %(role="img" aria-label="#{h(options[:aria_label])}")
    else
      attrs << 'role="img" aria-hidden="true"'
    end

    # width y height inline de 15px
    attrs << 'width="25" height="25"'

    svg = svg.sub("<svg", "<svg #{attrs.join(' ')}")
    svg.html_safe
  end
end
