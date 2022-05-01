var config = {
    //Banner settings
    banner: {
        fadeTime: 'slow', //can be slow, fast or the ammount of milliseconds
        interval: 10,
        messages: [
            '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGsmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIwVDEzOjI3OjM0KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTIwVDEzOjI3OjM0KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMFQxMzoyNzozNCswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1YWY5MjNjZC01ZDkyLTA1NGYtOWRiNC1jNzQ0YTAyODI5ZWIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYWU2ZWYyYS04MTJjLTI3NGItODNhYS00YTc4MGI2NmJkZWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjM2UwZGEwOS04M2EwLTcyNGEtYmFiNS1jYjkxOTUzZjJkZGIiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjM2UwZGEwOS04M2EwLTcyNGEtYmFiNS1jYjkxOTUzZjJkZGIiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjBUMTM6Mjc6MzQrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWFmOTIzY2QtNWQ5Mi0wNTRmLTlkYjQtYzc0NGEwMjgyOWViIiBzdEV2dDp3aGVuPSIyMDIxLTEwLTIwVDEzOjI3OjM0KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNmUyMWUyZi00MjZhLTdiNDYtODI1Ny0wZTQ4YTU2NTE2M2Y8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YmNiYmY4ZGMtNjBiNC1hZDRkLThkZTctODQ2YzVhZGMzYjk1PC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7jAvqwAABTxJREFUSMe1l2tMU2cYxx+0KuXWcmm5FAQv20jAbGZLtpjtwzL3wWxZzJZpMrOYTQ3aVlrh9LTFACoJblEXY5yZCtPEDGUoxl1M5jady2RB5VY4nF5Pr5R2UAqVQumFs7eFulIlh87tTX7JeT+0vz7/vpfnAE3TEIuMY00AC+B5epAVECDNIuCK1FIj4+nZ1Vw9xBPvgWcRV6VZQMa1gJRthH1ggK5rY7dPvmV5FecbIB5GMZ5tXjJHyozluEDNwvJJEKeqgOry6C7soXZigj7AChfCXHGeZknIBRrWb2edVxSrSTaGohay+8A7MUPfOGxtkPJUUJW/EGZxvnpJKEvUabN0gFaUkDlYLglYHpGOPk//3uy8JMnpg+oC1QKYoxaQjGB5JBx/U/dGWHR6q/5DMZuAyxIrFp4P3nZ3irm9iYureIOMVGYQcGGXqSJSYdNIawWQYOnxEuF5wB+g9yYRgPE0C2COen0XI5KCB3C1ljoYFnnH/X5lsZY/6QqO0fOjRTiMSZfZQM4degyzmGtipDpbC20yW0NU1LTTsCvgC/mj80lXYKKxzL4Bz7CDnDMHo1iaqkcYFkWSYoCD6zUvDKk91qjo+6O203Tc0HdMdlenmlfgXCuEYRSLkgdBtGqeleQ/zxHICDthAMy9HmNUcufccDv9lPFHs6slHLkyawkVywvVgBcRcIA3AJIcFVRyY+mH/RwVVLD6oL3O8kVU0HHZ8cvTxLMherZpm32bPMfMLFaWaED5HBGRK8vQYuJrAUu3AJaGIhOgPVysAnH6ADRuUr89//V0Z9tfd+hFhuaup0NRqEtmFhcj8ToCZIUE1JR1o0sAnbVpDsBTnaAoQj9idS/g67phXwqR7Lb7xt2OqSnN3Yn7i4ndwz63co06I3Fxrh6Jh0HGdgDGJ5e115vw3psj12+ddB572D56W3VrrHNiZMYTKwsFZ+dWtzsQbJUOH5Wk6JcnLFYItICn20GWOsS6d8HVEvcv0jdPWK/HV+nQTNP320Yd53dQNXVlZO7BdbrEK64p7Ydqjh6+3DK0JRgIzT6uCj1S3eNB6qGHipV6vV7a3Pso1POdm7p3cfTPlgPGU4c2aFcnJJY/3wX42j449T65aczqd8cKgsEQPTk2Ey46LoMQPWqZDv50wtEmyVAX7FmuRTeZFpYkVqyd207H31G9fLWO+upGnf3Gmfcs9Sc3m/F2paPVTk556CUMi2pyoLbIVoBzbcxiRaEGasuJjObdWtHZjzUiBd/00m7QL0PAHsSnoAMxW1d8VWa/6PMGGOWDP3vu4llm5u1UX64WnN5OVNSWakr3JqtQS0OBCLU1sYTbnF2gS2rYQL1r6pq0M8nPfWDfwSg+tLG/XMIhWOJkDezP6Eci4xPiKOEERKt0/B8bndc9I/7gYuIR89QocyNQPADSTHTnpjGLo9Wj+JPQfn/9/HZbY/NHtmNntpqPdHzjnHFZp2P9DGd1SWLiKHsj8YfXgDa8I3Jdtmkf9eAR7XH5/l+xEK0FMUsHBwp6oPbFXt6Ec2Yi0pEEgv+9WBh9TtJDZQpqcQQqkK3pgfqNA3nTjwLxS/7ZxMJ59rNQY4CagiqOAWQ56DzP16ELBcHXwWevUa9EbX5f6NnEESGqTJJsgOpM9NrCQ/Bj4M0hQnHfOTP69eNOpHN85JrSdupfiytXmAHjmECeE8YM8uwnwTPNcLjUWBQ9Rwd/Hdcf20x+ImQZVyYsFiKxJAVFmG2ae3XJWhxZpgl+aHA2PfjWrWreYftckqrNr+IRLAnryQ7kb2abSipBN4rNAAAAAElFTkSuQmCC"></img> <span class="text-white">arviworks.com</span>',
            '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIwVDEzOjEzOjI2KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTIwVDEzOjEzOjI2KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMFQxMzoxMzoyNiswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjNWI3MmY5ZC1kMDI0LWE5NDctOTdiMy1jYzNkZDU1ZWExZTkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiYWFiZDU2Ni0wMzI4LWNhNDItYjRjOS0xNGVjMjRlMWIxYTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYjY5YWMzYS0yYjBiLTRjNDItOTIyNy04ODE5MmQwM2VhZDEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozYjY5YWMzYS0yYjBiLTRjNDItOTIyNy04ODE5MmQwM2VhZDEiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjBUMTM6MTM6MjYrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzViNzJmOWQtZDAyNC1hOTQ3LTk3YjMtY2MzZGQ1NWVhMWU5IiBzdEV2dDp3aGVuPSIyMDIxLTEwLTIwVDEzOjEzOjI2KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Sq78wgAAAYNJREFUSMft1r9LAmEcx/EDBffU2bGhxS2CDjLIpcla2hyi1rAtpCC6oiiSCvFPCHIqWlwbmoLAIQIdQiHE5KADVz99vt1zoNJw56+D8IEXiPjwloe7h68GQPODNg1PLqz1CNAsLdE6bdIO7dEhndElXVFeuaEcndMR7dMubdMGrdAchbpb3dEDqvwewnh80El/+HaMwX73TnhxglHHsoSPfQhfSLjoQ/hRws+uN0QiQDw+ivCLhN88hWUVi/bnwcPvEq673hAIAJZlx9ttIJsdNFyXcMv1hlAIaDbRs6pVIJXyGm5J2Boq7KxyGUgk3Ia/Rxeu1YBk0m3YGv6oGw0gnfZ61Ka3hysYBEzTDnY6gGHYf8b7w/Xp7XUKh+1oqQTEYsO8ThVvF0g0Cuj6KC6QVwnf+XBlliRs+BDOS1j3IbzqDAIPE4w+9Y8+Mjd9jTFoUuGvmUvM0Dyt0RZlKKuGuFM16F2rIa+g5NV3OfUbQ+3JqIFPhsYFivQOe9OB/r+HfwDe5PhTxtxSGgAAAABJRU5ErkJggg=="></img> <span class="text-white">REHN</span>',
            '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIwVDEzOjEzOjI2KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTIwVDEzOjEzOjI2KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMFQxMzoxMzoyNiswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjNWI3MmY5ZC1kMDI0LWE5NDctOTdiMy1jYzNkZDU1ZWExZTkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiYWFiZDU2Ni0wMzI4LWNhNDItYjRjOS0xNGVjMjRlMWIxYTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYjY5YWMzYS0yYjBiLTRjNDItOTIyNy04ODE5MmQwM2VhZDEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozYjY5YWMzYS0yYjBiLTRjNDItOTIyNy04ODE5MmQwM2VhZDEiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjBUMTM6MTM6MjYrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzViNzJmOWQtZDAyNC1hOTQ3LTk3YjMtY2MzZGQ1NWVhMWU5IiBzdEV2dDp3aGVuPSIyMDIxLTEwLTIwVDEzOjEzOjI2KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Sq78wgAAAYNJREFUSMft1r9LAmEcx/EDBffU2bGhxS2CDjLIpcla2hyi1rAtpCC6oiiSCvFPCHIqWlwbmoLAIQIdQiHE5KADVz99vt1zoNJw56+D8IEXiPjwloe7h68GQPODNg1PLqz1CNAsLdE6bdIO7dEhndElXVFeuaEcndMR7dMubdMGrdAchbpb3dEDqvwewnh80El/+HaMwX73TnhxglHHsoSPfQhfSLjoQ/hRws+uN0QiQDw+ivCLhN88hWUVi/bnwcPvEq673hAIAJZlx9ttIJsdNFyXcMv1hlAIaDbRs6pVIJXyGm5J2Boq7KxyGUgk3Ia/Rxeu1YBk0m3YGv6oGw0gnfZ61Ka3hysYBEzTDnY6gGHYf8b7w/Xp7XUKh+1oqQTEYsO8ThVvF0g0Cuj6KC6QVwnf+XBlliRs+BDOS1j3IbzqDAIPE4w+9Y8+Mjd9jTFoUuGvmUvM0Dyt0RZlKKuGuFM16F2rIa+g5NV3OfUbQ+3JqIFPhsYFivQOe9OB/r+HfwDe5PhTxtxSGgAAAABJRU5ErkJggg=="></img> <span class="text-white">Arviworks</span>',
            '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIwVDEzOjExOjQxKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTIwVDEzOjExOjQxKzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMFQxMzoxMTo0MSswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkMWU1YWIxMy0wM2I4LTUzNDUtOTI0ZC1hZGM4YzgxODkwMzUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjODU2MWVmYy01NmY2LWNkNDgtYmYwNi1l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"></img> <span class="text-white">@rehn_arvinight</span>',
            '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIwVDEzOjExOjQxKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTIwVDEzOjExOjQxKzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMFQxMzoxMTo0MSswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkMWU1YWIxMy0wM2I4LTUzNDUtOTI0ZC1hZGM4YzgxODkwMzUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjODU2MWVmYy01NmY2LWNkNDgtYmYwNi1l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"></img> <span class="text-white">@arviworks</span>',
            '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHQmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIwVDEzOjE4OjAxKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTIwVDEzOjE5OjM4KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMFQxMzoxOTozOCswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOTU5ZjA5YS0yMTcyLTU1NDctODkzYi04YWYzZWE4ZWNmNmQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxMjlmOTU5OC01YjhkLWE3NGEtOGVjOS0xNTdkN2IwY2RhOWMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYWEzMTNkMi0yYjcwLWJjNGItOTczNS05MWJkNjI2ODZiOGQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZhYTMxM2QyLTJiNzAtYmM0Yi05NzM1LTkxYmQ2MjY4NmI4ZCIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yMFQxMzoxODowMSswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozN2FmNGU3Mi03NGM2LWU3NDQtYTZmYS1mMTE1ZGIwOWM0OTkiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjBUMTM6MTg6MDErMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Mzk1OWYwOWEtMjE3Mi01NTQ3LTg5M2ItOGFmM2VhOGVjZjZkIiBzdEV2dDp3aGVuPSIyMDIxLTEwLTIwVDEzOjE5OjM4KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPjM2MzI3RTM1RTA5RjJGNERCOTQwMEFCQjQw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"></img> <span class="text-white">discord.io/arviworks</span>'
        ]
    }
}
