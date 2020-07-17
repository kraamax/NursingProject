using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace ProyectoEnfermeria.Models
{
public class SoftwareContext : IdentityDbContext
{
    public SoftwareContext(DbContextOptions<SoftwareContext> options) :
        base(options)
         {
         }
        public DbSet<Paciente> Pacientes { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Companion> Companions { get; set; }
        public DbSet<FamilyBackground> FamilyBackgrounds { get; set; }
        public DbSet<GinecoBackground> GinecoBackgrounds { get; set; }
        public DbSet<Habit> Habits { get; set; }
        public DbSet<LifeStyle> LifeStyles { get; set; }
        public DbSet<PersonalBackground> PersonalBackgrounds { get; set; }
        public DbSet<VitalSigns> VitalSigns { get; set; }
        public DbSet<PhysicalExam> PhysicalExams { get; set; }
        public DbSet<AnthropometricMeasures> AnthropometricsMeasures { get; set; }
        public DbSet<Docente> Docentes { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers{ get; set; }
        public DbSet<StudentRequest> StudentsRequests { get; set; }

    }
}