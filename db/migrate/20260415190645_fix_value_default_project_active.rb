class FixValueDefaultProjectActive < ActiveRecord::Migration[8.1]
  def change
    change_column_default :todos, :priority, from: 0, to: 1
  end
end
