﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class ShowHorariofront
    {
        public int Idfront { get; set; }
        public int? Idhorario { get; set; }
        public byte[] Version { get; set; }

        public virtual RemFront IdfrontNavigation { get; set; }
        public virtual ShowHorario IdhorarioNavigation { get; set; }
    }
}