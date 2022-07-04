namespace MyAppApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddTables1 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Contacts", "GroupId", "dbo.Groups");
            DropIndex("dbo.Contacts", new[] { "GroupId" });
            AlterColumn("dbo.Contacts", "GroupId", c => c.Int());
            CreateIndex("dbo.Contacts", "GroupId");
            AddForeignKey("dbo.Contacts", "GroupId", "dbo.Groups", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Contacts", "GroupId", "dbo.Groups");
            DropIndex("dbo.Contacts", new[] { "GroupId" });
            AlterColumn("dbo.Contacts", "GroupId", c => c.Int(nullable: false));
            CreateIndex("dbo.Contacts", "GroupId");
            AddForeignKey("dbo.Contacts", "GroupId", "dbo.Groups", "Id", cascadeDelete: true);
        }
    }
}
