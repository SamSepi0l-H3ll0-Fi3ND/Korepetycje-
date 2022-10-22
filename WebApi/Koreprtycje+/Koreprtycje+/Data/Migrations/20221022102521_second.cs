using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Koreprtycje_.Data.Migrations
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AnnouncementId",
                table: "Tags",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Announcements",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "LessonLength",
                table: "Announcements",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "Announcements",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.CreateIndex(
                name: "IX_Tags_AnnouncementId",
                table: "Tags",
                column: "AnnouncementId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tags_Announcements_AnnouncementId",
                table: "Tags",
                column: "AnnouncementId",
                principalTable: "Announcements",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tags_Announcements_AnnouncementId",
                table: "Tags");

            migrationBuilder.DropIndex(
                name: "IX_Tags_AnnouncementId",
                table: "Tags");

            migrationBuilder.DropColumn(
                name: "AnnouncementId",
                table: "Tags");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Announcements");

            migrationBuilder.DropColumn(
                name: "LessonLength",
                table: "Announcements");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Announcements");
        }
    }
}
