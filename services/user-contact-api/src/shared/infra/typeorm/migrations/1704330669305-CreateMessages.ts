import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateMessages1704330669305 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: 'messages',
              columns: [
                  {
                      name: 'id',
                      type: 'uuid',
                      isPrimary: true,
                      generationStrategy: 'uuid',
                      default: 'uuid_generate_v4()',
                  },
                  {
                      name: 'name',
                      type: 'varchar',
                      isNullable: false,
                  },
                  {
                      name: 'email',
                      type: 'varchar',
                      isNullable: false,
                  },
                  {
                      name: 'phone',
                      type: 'varchar',
                      isNullable: false,
                  },
                  {
                      name: 'content',
                      type: 'varchar',
                      isNullable: false,
                  },
                  {
                      name: 'user_id',
                      type: 'uuid',
                      isNullable: true,
                  },
                  {
                      name: 'created_at',
                      type: 'timestamp',
                      default: 'now()',
                  },
                  {
                      name: 'updated_at',
                      type: 'timestamp',
                      default: 'now()',
                  },
              ],
          }),
        );

        await queryRunner.createForeignKey(
          'messages',
          new TableForeignKey({
              name: 'UserMessages',
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('messages', 'UserMessages');
        await queryRunner.dropTable('messages');
    }

}
