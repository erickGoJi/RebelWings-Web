﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class Procesosespecialesparam
    {
        public int Id { get; set; }
        public int Numsql { get; set; }
        public int Numparametro { get; set; }
        public string Nombre { get; set; }
        public string Caption { get; set; }
        public string Tipocampo { get; set; }
        public string Valordef { get; set; }
        public string Preguntar { get; set; }
        public string Seleccion { get; set; }
        public string Camposeleccion { get; set; }

        public virtual Procesosespecialessql Procesosespecialessql { get; set; }
    }
}