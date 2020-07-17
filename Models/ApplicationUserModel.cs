namespace ProyectoEnfermeria.Models
{
    public class ApplicationUserModel
    {   
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string FirstLastName { get; set; }
        public string SecondLastName { get; set; }
        public string BornDate { get; set; }
        public string Sex { get; set; }
        public int LocationBiannual { get; set; }
        public string Rol { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public bool IsEnable { get; set; }
    }
}