-- DropIndex
DROP INDEX `Admin_Accountant_role_idx` ON `Admin_Accountant`;

-- AlterTable
ALTER TABLE `Admin_Accountant` MODIFY `role` ENUM('ADMIN', 'ACCOUNTANT', 'SHAREHOLDER') NOT NULL;

-- CreateTable
CREATE TABLE `Shareholder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `role` ENUM('ADMIN', 'ACCOUNTANT', 'SHAREHOLDER') NOT NULL,

    UNIQUE INDEX `Shareholder_username_key`(`username`),
    INDEX `Shareholder_username_idx`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Admin_Accountant_username_idx` ON `Admin_Accountant`(`username`);
