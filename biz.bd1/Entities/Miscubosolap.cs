﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class Miscubosolap
    {
        public Miscubosolap()
        {
            MiscubosolapUsuarios = new HashSet<MiscubosolapUsuario>();
        }

        public int Idcubo { get; set; }
        public int Idinforme { get; set; }
        public string Descripcion { get; set; }
        public byte[] Dades { get; set; }
        public int? Tipo { get; set; }
        public byte[] Metadata { get; set; }
        public int? Tipograf { get; set; }
        public int? Estilograf { get; set; }
        public int? Factgraf { get; set; }
        public string Comparado { get; set; }

        public virtual Informe IdinformeNavigation { get; set; }
        public virtual ICollection<MiscubosolapUsuario> MiscubosolapUsuarios { get; set; }
    }
}