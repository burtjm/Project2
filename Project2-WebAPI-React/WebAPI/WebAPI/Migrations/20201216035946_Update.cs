using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class Update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "id", "age", "email", "firstname", "lastname", "mobile", "program" },
                values: new object[] { 1, 23, "goodsally@gmail.com", "Sally", "Goodman", "414-555-9102", "Business" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "id",
                keyValue: 1);
        }
    }
}
