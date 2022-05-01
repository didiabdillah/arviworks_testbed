-- Shows a notification on the player's screen 
function ShowNotification( text )
    SetNotificationTextEntry("STRING")
    AddTextComponentSubstringPlayerName(text)
    DrawNotification(false, false)
end

RegisterCommand('car', function(source, args, rawCommand)
    -- local x,y,z = table.unpack(GetOffsetFromEntityInWorldCoords(PlayerPedId(), 0.0, 8.0, 0.5))
    local veh = args[1]
    if veh == nil then veh = "adder" end
    vehicleName = veh
    vehiclehash = GetHashKey(veh)
    playerPed = PlayerPedId()
    pos = GetEntityCoords(playerPed)

    -- Check if the vehicle actually exists
    if not IsModelInCdimage(vehicleName) or not IsModelAVehicle(vehicleName) then
        TriggerEvent('chat:addMessage', {
            args = {'Vehicle not recognised: ' .. vehicleName}
        })
        return
    end

    RequestModel(vehiclehash)
    
    Citizen.CreateThread(function() 
        local waiting = 0
        while not HasModelLoaded(vehiclehash) do
            waiting = waiting + 100
            Citizen.Wait(100)
            if waiting > 5000 then
                ShowNotification("~r~Could not load the vehicle model in time, a crash was prevented.")
                break
            end
        end
        

        local vehicle = CreateVehicle(vehicleName, pos.x, pos.y, pos.z, GetEntityHeading(playerPed), true, false)

        -- Set the player ped into the vehicle driver seat
        SetPedIntoVehicle(playerPed, vehicle, -1)

        -- Give the vehicle back to the game (this will make the game decide when to despawn the vehicle)
        SetEntityAsNoLongerNeeded(vehicle)

        -- Release the model
        SetModelAsNoLongerNeeded(vehicleName)

        -- Tell the player
        TriggerEvent('chat:addMessage', {
            args = {'You have spawned a ' .. vehicleName .. '.'}
        })
    end)
end)

RegisterCommand('dv', function()
    local playerPed = PlayerPedId()

    local vehicle = GetVehiclePedIsIn(playerPed, false)
    
    DeleteEntity(vehicle)
end, false)

