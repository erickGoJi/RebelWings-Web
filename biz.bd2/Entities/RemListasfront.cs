﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class RemListasfront
    {
        public RemListasfront()
        {
            RemListasfrontsdetalles = new HashSet<RemListasfrontsdetalle>();
        }

        public int Idfront { get; set; }
        public int Tipo { get; set; }
        public int Codigo { get; set; }
        public byte[] Version { get; set; }
        public string Codigostr { get; set; }
        public int? Posicion { get; set; }
        public DateTime? Fechainicial { get; set; }
        public DateTime? Horainicial { get; set; }
        public DateTime? Fechafinal { get; set; }
        public DateTime? Horafinal { get; set; }

        public virtual RemFront IdfrontNavigation { get; set; }
        public virtual ICollection<RemListasfrontsdetalle> RemListasfrontsdetalles { get; set; }
    }
}