using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using VendingMachine.Server.Data;
using VendingMachine.Server.Models;
using VendingMachine.Server.Repositories.Interfaces;
using VendingMachine.Server.Repositories;
using VendingMachine.Server.Services.Interfaces;
using VendingMachine.Server.Services;

var builder = WebApplication.CreateBuilder(args);

//kestrel configuration
builder.WebHost.ConfigureKestrel(options =>
{
    options.ConfigureHttpsDefaults(httpsOptions =>
    {
        httpsOptions.ClientCertificateMode = Microsoft.AspNetCore.Server.Kestrel.Https.ClientCertificateMode.NoCertificate;
    });
});

//appsettings.json
builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

//cors
builder.Services.AddCors(options =>
    options.AddPolicy("policy", builder =>
    {
        options.AddPolicy("AllowAllOrigins",
            builder => builder.AllowAnyOrigin()
                              .AllowAnyMethod()
                              .AllowAnyHeader());
    })
);

//����������� identity
/*var IdentityConnectionString = builder.Configuration.GetConnectionString("IdentityConnection") ?? throw new InvalidOperationException("Connection string 'IdentityConnection' not found.");
builder.Services.AddDbContext<IdentityConnectionDbContext>(options =>
    options.UseNpgsql(IdentityConnectionString));*/

//����������� �������� ���� ������
var DataConnectionString = builder.Configuration.GetConnectionString("DataConnection") ?? throw new InvalidOperationException("Connection string 'DataConnection' not found.");
builder.Services.AddDbContext<DataConnectionDbContext>(options =>
    options.UseNpgsql(DataConnectionString));

//��������� identity
/*builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<IdentityConnectionDbContext>()
    .AddDefaultTokenProviders();*/

builder.Services.AddControllers();
builder.Services.AddScoped<IBrandRepository, BrandRepository>();
builder.Services.AddScoped<IBrandService, BrandService>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IProductService, ProductService>();
//
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("AllowAllOrigins");
app.UseAuthorization();
app.MapControllers();
app.Run();