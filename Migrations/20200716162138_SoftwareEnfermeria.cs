using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoEnfermeria.Migrations
{
    public partial class SoftwareEnfermeria : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    User = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: true),
                    Rol = table.Column<string>(nullable: true),
                    State = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.User);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    Discriminator = table.Column<string>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    SecondName = table.Column<string>(nullable: true),
                    FirstLastName = table.Column<string>(nullable: true),
                    SecondLastName = table.Column<string>(nullable: true),
                    BornDate = table.Column<string>(nullable: true),
                    Sex = table.Column<string>(nullable: true),
                    LocationBiannual = table.Column<int>(nullable: true),
                    Rol = table.Column<string>(nullable: true),
                    IsEnable = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Docentes",
                columns: table => new
                {
                    IdDocente = table.Column<string>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    SecondName = table.Column<string>(nullable: true),
                    FirstLastName = table.Column<string>(nullable: true),
                    SecondLastName = table.Column<string>(nullable: true),
                    BornDate = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    Sex = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    LocationBiannual = table.Column<int>(nullable: false),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docentes", x => x.IdDocente);
                });

            migrationBuilder.CreateTable(
                name: "Habits",
                columns: table => new
                {
                    IdHabit = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(nullable: true),
                    Rating = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Habits", x => x.IdHabit);
                });

            migrationBuilder.CreateTable(
                name: "StudentsRequests",
                columns: table => new
                {
                    IdRequest = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ReceptorEmail = table.Column<string>(nullable: true),
                    EmissorNames = table.Column<string>(nullable: true),
                    EmissorLastNames = table.Column<string>(nullable: true),
                    EmissorId = table.Column<string>(nullable: true),
                    EmissorEmail = table.Column<string>(nullable: true),
                    EmissorPhoneNumber = table.Column<string>(nullable: true),
                    EmissorLocationBiannual = table.Column<int>(nullable: false),
                    isAccepted = table.Column<bool>(nullable: false),
                    Date = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentsRequests", x => x.IdRequest);
                });

            migrationBuilder.CreateTable(
                name: "Pacientes",
                columns: table => new
                {
                    IdPaciente = table.Column<string>(nullable: false),
                    Names = table.Column<string>(nullable: true),
                    LastNames = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Sex = table.Column<string>(nullable: true),
                    AccountUser = table.Column<string>(nullable: true),
                    BornDate = table.Column<string>(nullable: true),
                    BornPlace = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    MaritalStatus = table.Column<string>(nullable: true),
                    HealtInstitution = table.Column<string>(nullable: true),
                    HaveDiabetes = table.Column<bool>(nullable: false),
                    HaveHipertension = table.Column<bool>(nullable: false),
                    Diagnostic = table.Column<string>(nullable: true),
                    OtherDiagnostic = table.Column<string>(nullable: true),
                    ScholarShip = table.Column<string>(nullable: true),
                    Occupation = table.Column<string>(nullable: true),
                    RegistrationDate = table.Column<string>(nullable: true),
                    ResponsibleNurseId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pacientes", x => x.IdPaciente);
                    table.ForeignKey(
                        name: "FK_Pacientes_Accounts_AccountUser",
                        column: x => x.AccountUser,
                        principalTable: "Accounts",
                        principalColumn: "User",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AnthropometricsMeasures",
                columns: table => new
                {
                    IdAnthropometricMeasures = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PacienteId = table.Column<string>(nullable: true),
                    Weight = table.Column<double>(nullable: false),
                    CephalicPerimeter = table.Column<double>(nullable: false),
                    ThoracicPerimeter = table.Column<double>(nullable: false),
                    AbdominalPerimeter = table.Column<double>(nullable: false),
                    Size = table.Column<double>(nullable: false),
                    IMC = table.Column<double>(nullable: false),
                    Interpretation = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnthropometricsMeasures", x => x.IdAnthropometricMeasures);
                    table.ForeignKey(
                        name: "FK_AnthropometricsMeasures_Pacientes_PacienteId",
                        column: x => x.PacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "IdPaciente",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Companions",
                columns: table => new
                {
                    IdCompanion = table.Column<string>(nullable: false),
                    Names = table.Column<string>(nullable: true),
                    LastNames = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PacienteId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companions", x => x.IdCompanion);
                    table.ForeignKey(
                        name: "FK_Companions_Pacientes_PacienteId",
                        column: x => x.PacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "IdPaciente",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "FamilyBackgrounds",
                columns: table => new
                {
                    IdFamilyBackground = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PacienteId = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FamilyBackgrounds", x => x.IdFamilyBackground);
                    table.ForeignKey(
                        name: "FK_FamilyBackgrounds_Pacientes_PacienteId",
                        column: x => x.PacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "IdPaciente",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "GinecoBackgrounds",
                columns: table => new
                {
                    IdGinecoBackground = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PacienteId = table.Column<string>(nullable: true),
                    Menarche = table.Column<string>(nullable: true),
                    FUM = table.Column<string>(nullable: true),
                    G = table.Column<string>(nullable: true),
                    P = table.Column<string>(nullable: true),
                    C = table.Column<string>(nullable: true),
                    A = table.Column<string>(nullable: true),
                    Ciclos = table.Column<string>(nullable: true),
                    IVS = table.Column<string>(nullable: true),
                    Menopausia = table.Column<string>(nullable: true),
                    PerformedCytology = table.Column<bool>(nullable: false),
                    DateLastCytology = table.Column<string>(nullable: true),
                    Results = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GinecoBackgrounds", x => x.IdGinecoBackground);
                    table.ForeignKey(
                        name: "FK_GinecoBackgrounds_Pacientes_PacienteId",
                        column: x => x.PacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "IdPaciente",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "LifeStyles",
                columns: table => new
                {
                    IdLifeStyle = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PacienteId = table.Column<string>(nullable: true),
                    NutricionalHabitIdHabit = table.Column<int>(nullable: true),
                    HygienicHabitIdHabit = table.Column<int>(nullable: true),
                    RestIdHabit = table.Column<int>(nullable: true),
                    ExcerciseIdHabit = table.Column<int>(nullable: true),
                    LeisureIdHabit = table.Column<int>(nullable: true),
                    NociveHabitIdHabit = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LifeStyles", x => x.IdLifeStyle);
                    table.ForeignKey(
                        name: "FK_LifeStyles_Habits_ExcerciseIdHabit",
                        column: x => x.ExcerciseIdHabit,
                        principalTable: "Habits",
                        principalColumn: "IdHabit",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LifeStyles_Habits_HygienicHabitIdHabit",
                        column: x => x.HygienicHabitIdHabit,
                        principalTable: "Habits",
                        principalColumn: "IdHabit",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LifeStyles_Habits_LeisureIdHabit",
                        column: x => x.LeisureIdHabit,
                        principalTable: "Habits",
                        principalColumn: "IdHabit",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LifeStyles_Habits_NociveHabitIdHabit",
                        column: x => x.NociveHabitIdHabit,
                        principalTable: "Habits",
                        principalColumn: "IdHabit",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LifeStyles_Habits_NutricionalHabitIdHabit",
                        column: x => x.NutricionalHabitIdHabit,
                        principalTable: "Habits",
                        principalColumn: "IdHabit",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LifeStyles_Pacientes_PacienteId",
                        column: x => x.PacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "IdPaciente",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LifeStyles_Habits_RestIdHabit",
                        column: x => x.RestIdHabit,
                        principalTable: "Habits",
                        principalColumn: "IdHabit",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PersonalBackgrounds",
                columns: table => new
                {
                    IdPersonalBackground = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PacienteId = table.Column<string>(nullable: true),
                    Surgical = table.Column<string>(nullable: true),
                    Traumatic = table.Column<string>(nullable: true),
                    Allergic = table.Column<string>(nullable: true),
                    Phatological = table.Column<string>(nullable: true),
                    Hospitalization = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonalBackgrounds", x => x.IdPersonalBackground);
                    table.ForeignKey(
                        name: "FK_PersonalBackgrounds_Pacientes_PacienteId",
                        column: x => x.PacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "IdPaciente",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PhysicalExams",
                columns: table => new
                {
                    IdPhysicalExam = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PacienteId = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhysicalExams", x => x.IdPhysicalExam);
                    table.ForeignKey(
                        name: "FK_PhysicalExams_Pacientes_PacienteId",
                        column: x => x.PacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "IdPaciente",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "VitalSigns",
                columns: table => new
                {
                    IdVitalSigns = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PacienteId = table.Column<string>(nullable: true),
                    BloodPressure = table.Column<double>(nullable: false),
                    BPS = table.Column<int>(nullable: false),
                    BPD = table.Column<int>(nullable: false),
                    Pulse = table.Column<int>(nullable: false),
                    Temperature = table.Column<double>(nullable: false),
                    TypeGlycemia = table.Column<string>(nullable: true),
                    Glycemia = table.Column<int>(nullable: false),
                    Breath = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VitalSigns", x => x.IdVitalSigns);
                    table.ForeignKey(
                        name: "FK_VitalSigns_Pacientes_PacienteId",
                        column: x => x.PacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "IdPaciente",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AnthropometricsMeasures_PacienteId",
                table: "AnthropometricsMeasures",
                column: "PacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Companions_PacienteId",
                table: "Companions",
                column: "PacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_FamilyBackgrounds_PacienteId",
                table: "FamilyBackgrounds",
                column: "PacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_GinecoBackgrounds_PacienteId",
                table: "GinecoBackgrounds",
                column: "PacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_LifeStyles_ExcerciseIdHabit",
                table: "LifeStyles",
                column: "ExcerciseIdHabit");

            migrationBuilder.CreateIndex(
                name: "IX_LifeStyles_HygienicHabitIdHabit",
                table: "LifeStyles",
                column: "HygienicHabitIdHabit");

            migrationBuilder.CreateIndex(
                name: "IX_LifeStyles_LeisureIdHabit",
                table: "LifeStyles",
                column: "LeisureIdHabit");

            migrationBuilder.CreateIndex(
                name: "IX_LifeStyles_NociveHabitIdHabit",
                table: "LifeStyles",
                column: "NociveHabitIdHabit");

            migrationBuilder.CreateIndex(
                name: "IX_LifeStyles_NutricionalHabitIdHabit",
                table: "LifeStyles",
                column: "NutricionalHabitIdHabit");

            migrationBuilder.CreateIndex(
                name: "IX_LifeStyles_PacienteId",
                table: "LifeStyles",
                column: "PacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_LifeStyles_RestIdHabit",
                table: "LifeStyles",
                column: "RestIdHabit");

            migrationBuilder.CreateIndex(
                name: "IX_Pacientes_AccountUser",
                table: "Pacientes",
                column: "AccountUser");

            migrationBuilder.CreateIndex(
                name: "IX_PersonalBackgrounds_PacienteId",
                table: "PersonalBackgrounds",
                column: "PacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_PhysicalExams_PacienteId",
                table: "PhysicalExams",
                column: "PacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_VitalSigns_PacienteId",
                table: "VitalSigns",
                column: "PacienteId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnthropometricsMeasures");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Companions");

            migrationBuilder.DropTable(
                name: "Docentes");

            migrationBuilder.DropTable(
                name: "FamilyBackgrounds");

            migrationBuilder.DropTable(
                name: "GinecoBackgrounds");

            migrationBuilder.DropTable(
                name: "LifeStyles");

            migrationBuilder.DropTable(
                name: "PersonalBackgrounds");

            migrationBuilder.DropTable(
                name: "PhysicalExams");

            migrationBuilder.DropTable(
                name: "StudentsRequests");

            migrationBuilder.DropTable(
                name: "VitalSigns");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Habits");

            migrationBuilder.DropTable(
                name: "Pacientes");

            migrationBuilder.DropTable(
                name: "Accounts");
        }
    }
}
