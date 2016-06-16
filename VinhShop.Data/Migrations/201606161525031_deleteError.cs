namespace VinhShop.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class deleteError : DbMigration
    {
        public override void Up()
        {
            DropTable("dbo.Errors");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Errors",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Message = c.String(),
                        StackTrace = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
    }
}
