﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Modificadorescab
    {
        public Modificadorescab()
        {
            Modificadoresidiomas = new HashSet<Modificadoresidioma>();
            Ordenesmenudetalles = new HashSet<Ordenesmenudetalle>();
        }

        public int Codmodificador { get; set; }
        public string Descripcion { get; set; }
        public bool? Esmenu { get; set; }
        public byte[] Version { get; set; }
        public bool? Divisible { get; set; }
        public bool? Cobrardivcara { get; set; }

        public virtual ICollection<Modificadoresidioma> Modificadoresidiomas { get; set; }
        public virtual ICollection<Ordenesmenudetalle> Ordenesmenudetalles { get; set; }
    }
}