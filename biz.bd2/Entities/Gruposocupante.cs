﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Gruposocupante
    {
        public Gruposocupante()
        {
            Condicionesgruposocupantes = new HashSet<Condicionesgruposocupante>();
        }

        public int Idgrupo { get; set; }
        public string Descripcion { get; set; }
        public byte[] Version { get; set; }

        public virtual ICollection<Condicionesgruposocupante> Condicionesgruposocupantes { get; set; }
    }
}