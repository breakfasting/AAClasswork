require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res)
    
    @req = req
    @res = res
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response ||= false
  end

  # Set the response status code and header
  def redirect_to(url)
    raise "attempting to render twice" if already_built_response?
    @already_built_response = true

    res.status = 302
    res.location = url
    session.store_session(res)
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type="text/html")
    raise "attempting to render twice" if already_built_response?

    @already_built_response = true
    res["Content-Type"] = content_type
    res.write(content)
    session.store_session(res)
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    current_path = File.dirname(__FILE__)
    class_name = self.class.to_s.underscore
    template_path = File.join(current_path, "..", "views", "#{class_name}", "#{template_name}.html.erb")
    content = File.read(template_path)

    result = ERB.new(content).result(binding)
    render_content(result)
  end

  # method exposing a `Session` object
  def session
    @session ||= Session.new(req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    debugger
  end
end

