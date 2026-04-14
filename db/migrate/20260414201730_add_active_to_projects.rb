class AddActiveToProjects < ActiveRecord::Migration[8.1]
  def change
    add_column :projects, :active, :boolean, default: false, null: false
  end
end
