﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class Tipoaviso
    {
        public Tipoaviso()
        {
            Conocimientos = new HashSet<Conocimiento>();
        }

        public int Codtipoaviso { get; set; }
        public int? Idparent { get; set; }
        public string Descripcion { get; set; }
        public int? Tiempo { get; set; }
        public int? Tiempofac { get; set; }
        public int? Codarticulo { get; set; }
        public string Talla { get; set; }
        public string Color { get; set; }
        public int? Codcondicion { get; set; }
        public int? Numpresup { get; set; }
        public string Seriepresup { get; set; }
        public byte[] Version { get; set; }

        public virtual ICollection<Conocimiento> Conocimientos { get; set; }
    }
}