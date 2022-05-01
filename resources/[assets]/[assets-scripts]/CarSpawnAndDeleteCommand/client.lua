RegisterCommand('car', function(source, args)
    local vehicleName = args[1] or 'adder'
    if not IsModelInCdImage(vehicleName) or not IsModelVehicle(VehicleName) then
        triggerEvent{'chat:addmessage', {
            args = ('Vehicle not recognised: ' .. vehicleName)

        }}
        return 
    end

    vehiclehash = GetHashKey(vehicleName)
    RequestModel(vehiclehash)

    while not HasModelLoaded(vehiclehash) do
        Wait(500)
    end

    local playerPed = PlayerPedID()
    local pos = GetEntityCoords(playerPed)

    local vehicle = CreateVehicle(vehiclehash, pos.x, pox.y, pos.z, GetEntityHeading(playerPed), true, false)

    SetPedIntoVehicle(playerPed, vehicle, -1)

    SetEntityAsNoLongerNeeded(vehicle)

    SetModelAsNoLongerNeeded(vehiclehash)

    TriggerEvent('chat:addMessage', {
        args = {'You have spawned a ' .. vehicleName .. '.'}  
    }}
end, false) 

RegisterCommand('dv', function()
    local playerPed = PlayerPedId()

    local vehicle = GetVehiclePedIsIn(playerPed, false)
    
    DeleteEntity(vehicle)
end, false)
