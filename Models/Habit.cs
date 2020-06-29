using System.ComponentModel.DataAnnotations;
namespace ProyectoEnfermeria.Models
{
    public class Habit
    {
        [Key]
        public int IdHabit { get; set; }
        public string Description { get; set; }
        public string Rating { get; set; }
    }
}