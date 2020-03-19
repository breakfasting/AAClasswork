class AttrAccessorObject
  def self.my_attr_accessor(*names)
    names.each do |ivar|
      # getter
      define_method(ivar) do
        instance_variable_get("@#{ivar}")
      end

      #setter
      define_method("#{ivar}=") do |val|
        instance_variable_set("@#{ivar}", val)
      end
    end
  end
end
